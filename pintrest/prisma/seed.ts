import { PrismaClient } from '@prisma/client';
// import { updateSession } from '../actions/session';
import { User } from '../lib/response';

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'Damian',
            img: '',
        },
    });

    // const sessionData: Partial<User> = {
    //     id: user.id,
    //     name: user.name,
    //     img: user.img,
    // };

    // await updateSession(sessionData);

    // Add your data(url) here
    const images = [];

    await prisma.img.createMany({
        data: images.map((image) => ({ img: image.url })),
    });
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
