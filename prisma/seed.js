const { PrismaClient } = require('../lib/generated/prisma')
const fs = require('fs')
const path = require('path')

const prisma = new PrismaClient()
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../data.json'), 'utf8'))

async function main() {
  // Clear existing data
  await prisma.movie.deleteMany({})
  await prisma.genre.deleteMany({})
  await prisma.director.deleteMany({})

  console.log('Deleted existing records')

  // Seed genres
  for (const genre of data.genres) {
    await prisma.genre.create({
      data: genre
    })
  }

  console.log('Seeded genres')

  // Seed directors
  for (const director of data.directors) {
    await prisma.director.create({
      data: director
    })
  }

  console.log('Seeded directors')

  // Seed movies
  for (const movie of data.movies) {
    await prisma.movie.create({
      data: movie
    })
  }

  console.log('Seeded movies')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  }) 