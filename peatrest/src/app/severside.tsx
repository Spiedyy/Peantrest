"use server";

import { PrismaClient } from "@prisma/client";
import { Boards } from "../../lib/response";

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

export async function getBoard(board_id: number) {
  const board = await prisma.boards.findUnique({
    where: { board_id },
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

  return board;
}

export async function Createboard(boardName: string) {
  const board = await prisma.boards.create({
    data: {
      boardName,
    },
  });

  return board;
}

export async function RemoveImageFromBoard(board_id: number, img_id: number) {
  const deletedImage = await prisma.boardImg.deleteMany({
    where: {
      board_id,
      img_id,
    },
  });

  return deletedImage;
}

export async function saveImageToBoard(board_id: number, img_id: number) {
  const board = await prisma.boards.findUnique({
    where: { board_id },
    select: {
      images: {
        select: {
          img_id: true,
        },
      },
    },
  });

  if (!board?.images.some((image) => image.img_id === img_id)) {
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

  const msg = "Image already exists in board";
  return msg;
  
}

export async function deleteBoard(board_id: number): Promise<Boards> {
  const boardImages = await prisma.boardImg.deleteMany({
    where: { board_id },
  });
  const board = await prisma.boards.delete({
    where: { board_id },
  });

  return { board, boardImages };
}

export async function changeBoardName(newBoardName: string, board_id: number) {
  const board = await prisma.boards.update({
    where: { board_id },
    data: {
      boardName: newBoardName,
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
