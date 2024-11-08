"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main() {}

export async function getUser() {
  const users = await prisma.user.findMany();

  return {
    data: {
      users,
    },
  };
}

export async function getImages() {
  const images = await prisma.img.findMany();

  return {
    data: {
      images,
    },
  };
}

export async function getBoards() {
  const boards = await prisma.boards.findMany({
    select: {
      board_id: true,
      boardName: true,
      images: {
        select: {
          img: {
            select: {
              img_id: true,
              img: true,
              createdAt: true,
              updatedAt: true,
            },
          },
        },
      },
      createdAt: true,
      updatedAt: true,
    },
  });

  return boards;
}

export async function createBoard(boardName: string) {
  const board = await prisma.boards.create({
    data: {
      boardName,
    },
  });

  return board;
}

export async function saveImageToBoard(board_id: number, img_id: number) {
  const board = await prisma.boards.update({
    where: { board_id },
    data: {
      images: {
        create: {
          img_id,
        },
      },
    },
  });

  return board;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
