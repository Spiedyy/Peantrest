"use server"

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main() { }

export async function getUser() {
    const users = await prisma.user.findMany();

    return {
        data: {
            users
        }
    };
}

export async function getImages() {
    const images = await prisma.img.findMany();

    return {
        data: {
            images
        }
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

    return boards
}

main().then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });


