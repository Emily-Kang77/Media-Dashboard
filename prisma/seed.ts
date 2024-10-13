import { Prisma } from '@prisma/client'
import PrismaClientPkg from "@prisma/client";

const PrismaClient = PrismaClientPkg.PrismaClient;
const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.upsert({
    where: { id: '248023480923409234'},
    update: {},
    create: {
      email: 'alice@example.com',
      name: 'Alice',
      hashedPassword: '123',
      media: {
        create: [
          {
            title: "Ryan George Extra Plus!",
            type: "Youtube Channel",
            creator: "Ryan George",
            userReview: "Really funny comedy!",
            slug: "ryan-george-extra-plus",
          },
          {
            title: "Casual Geographic",
            type: "Youtube Channel",
            creator: "Mamadou Ndiaye",
            userReview: "A big time sink and a way to appreciate animals",
            slug: "casual-geographic",
          }
        ]
      },
    }
  });

  const bob = await prisma.user.upsert({
    where: { id: '897457710235982'},
    update: {},
    create: {
      email: 'bob@example.com',
      name: 'Bob',
      hashedPassword: '123',
      media: {
        create: [
          {
            title: "The Daily",
            type: "Podcast",
            creator: "The New York Times",
            userReview: "Great daily news podcast",
            slug: "the-daily",
          },
          {
            title: "How I Built This",
            type: "Podcast",
            creator: "NPR",
            userReview: "Inspiring stories of entrepreneurship",
            slug: "how-i-built-this",
          },
          {
            title: "The Tim Ferriss Show",
            type: "Podcast",
            creator: "Tim Ferriss",
            userReview: "Fascinating interviews with successful people",
            slug: "the-tim-ferriss-show",
          },
        ],
      },
    },
  });

  const charlie = await prisma.user.upsert({
    where: { id: '195827669241243'},
    update: {},
    create: {
      email: 'charlie@example.com',
      name: 'Charlie',
      hashedPassword: '123',
      media: {
        create: [
          {
            title: "Marques Brownlee",
            type: "YouTube Channel",
            creator: "Marques Brownlee",
            userReview: "In-depth tech reviews and analysis",
            slug: "marques-brownlee",
          },
          {
            title: "Louis Rossmann",
            type: "YouTube Channel",
            creator: "Louis Rossmann",
            userReview: "Honest and informative repair shop vlogs",
            slug: "louis-rossmann",
          },
          {
            title: "Vsauce",
            type: "YouTube Channel",
            creator: "Michael Stevens",
            userReview: "Mind-blowing educational content",
            slug: "vsauce",
          },
        ],
      },
    },
  });
}