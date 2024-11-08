import { PrismaClient } from '@prisma/client';
// import { updateSession } from '../actions/session';
import { User } from '../lib/response';

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            name: 'Damian',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_O86oFjR8kk8ZprcmqcEQfgooMkeGZQGC-A&s',
        },
    });

    const images = [
        { url: "https://i.pinimg.com/236x/9b/76/76/9b767690082070204e443b4523a881a6.jpg" },
        { url: "https://i.pinimg.com/474x/ae/7c/df/ae7cdf85e54dc2327e914f529589e974.jpg" },
        { url: "https://i.pinimg.com/236x/99/99/d3/9999d3023b683fab56e7e28fa263b0de.jpg" },
        { url: "https://i.pinimg.com/236x/ef/45/13/ef451345d187c0501198398829062108.jpg" },
        { url: "https://i.pinimg.com/140x140_RS/f3/1c/a0/f31ca09961ad22be6c8734f10b274036.jpg" },
        { url: "https://i.pinimg.com/236x/51/8e/8a/518e8ab54146e568152f0e662637a053.jpg" },
        { url: "https://i.pinimg.com/236x/9c/ad/71/9cad715ced804fa84b22686347fbdcd8.jpg" },
        { url: "https://i.pinimg.com/236x/4e/92/34/4e9234164fc944b33cd5e924af8e8f99.jpg" },
        { url: "https://i.pinimg.com/236x/1b/c2/22/1bc2227883a00d8b4d45fe08a2419e37.jpg" },
        { url: "https://i.pinimg.com/236x/98/26/67/982667608cea8bdb21f67cc7495f298b.jpg" },
        { url: "https://i.pinimg.com/140x140_RS/b5/03/e4/b503e4e6aaacd0f2d49893aa5678f37d.jpg" },
        { url: "https://i.pinimg.com/236x/ad/c2/f8/adc2f815c65b02b66ac04811d731f884.jpg" },
        { url: "https://i.pinimg.com/236x/ad/11/a3/ad11a30c1c0735019e15ea2fe8463b9e.jpg" },
        { url: "https://i.pinimg.com/236x/a2/75/6f/a2756f2890c0e493a5b9daa0bc6e4977.jpg" },
        { url: "https://i.pinimg.com/236x/79/b5/24/79b524373c3f55aaa0276390ec6c3e1f.jpg" },
        { url: "https://i.pinimg.com/236x/4d/25/56/4d25561e43e562d906137a91fc7ba850.jpg" },
        { url: "https://i.pinimg.com/236x/51/2c/86/512c86765c0c1b7d229bddc2581da93d.jpg" },
        { url: "https://i.pinimg.com/140x140_RS/de/93/3f/de933fd192b4e7c2793544a8c4df02f4.jpg" },
        { url: "https://i.pinimg.com/236x/98/3f/18/983f1849d1dbef9abe3d44c8b8ddf781.jpg" },
        { url: "https://i.pinimg.com/236x/52/a1/c8/52a1c8336ba21c8a83ef0c13b60711c7.jpg" },
        { url: "https://i.pinimg.com/140x140_RS/f2/5b/ad/f25bad44f838ed3c5924f248720fa979.jpg" },
        { url: "https://i.pinimg.com/236x/ca/94/92/ca9492aacf4151deacd09915496c82dc.jpg" },
        { url: "https://i.pinimg.com/236x/b0/b6/ee/b0b6eed66aed5cf7c019608ffe56000d.jpg" },
        { url: "https://i.pinimg.com/140x140_RS/25/5d/d9/255dd91846f55311214231ffadd054ae.jpg" },
        { url: "https://i.pinimg.com/236x/b7/aa/66/b7aa6637a60fa863ded84e912ff668ee.jpg" },
        { url: "https://i.pinimg.com/236x/03/91/df/0391df440452f26d0548d26225de0498.jpg" },
        { url: "https://i.pinimg.com/236x/a9/24/1f/a9241f989ce4a0dbf96fc15c8a12f688.jpg" },
        { url: "https://i.pinimg.com/236x/15/f5/16/15f5168fb509596c0c0faf6f50fadc64.jpg" },
        { url: "https://i.pinimg.com/236x/bb/16/c9/bb16c92de183b38bb35961404f8c3fa1.jpg" },
        { url: "https://i.pinimg.com/474x/3a/68/31/3a683139f2d4e213bbd47d16ff4d3d2c.jpg" },
        { url: "https://i.pinimg.com/236x/07/ab/c4/07abc49d875f00ce4f2cb07d0747dfa8.jpg" },
        { url: "https://i.pinimg.com/236x/07/ce/73/07ce73f4047b9fba17e7a9a845ed06f8.jpg" },
        { url: "https://i.pinimg.com/236x/2d/a6/7b/2da67bb2fb04942a3217352dccc08db0.jpg" },
        { url: "https://i.pinimg.com/236x/6b/d5/17/6bd517eef90d4df3c31e45395fc03b31.jpg" },
        { url: "https://i.pinimg.com/236x/90/7b/7d/907b7dd8c43895bff7f99acfba161d00.jpg" },
        { url: "https://i.pinimg.com/236x/bd/74/bb/bd74bbc007a05c78a603b92ac536dd8a.jpg" },
        { url: "https://i.pinimg.com/236x/e6/c0/f6/e6c0f6e3da7bbdbdc7f753810b333c5b.jpg" },
        { url: "https://i.pinimg.com/236x/d9/fe/cd/d9fecd40a3231f742ac2a63f722d2dda.jpg" },
        { url: "https://i.pinimg.com/236x/f8/96/99/f89699796d849edcaf88e3764a1c6e62.jpg" },
        { url: "https://i.pinimg.com/236x/77/57/39/775739616be86cc5c81ccc86117e7ea6.jpg" },
        { url: "https://i.pinimg.com/236x/19/c7/a3/19c7a3ed0c5917d98896e9ac654a45fd.jpg" },
        { url: "https://i.pinimg.com/236x/15/aa/0d/15aa0d7fc4e85d690d82c23cefdab828.jpg" },
        { url: "https://i.pinimg.com/236x/99/b6/e1/99b6e153a56578c5cd2560d0b723c1de.jpg" },
        { url: "https://i.pinimg.com/474x/b3/a0/e0/b3a0e08514143c270e7cafff35dde6a4.jpg" },
        { url: "https://i.pinimg.com/236x/5a/82/f7/5a82f708c91465b42f2daa9037ce945c.jpg" },
        { url: "https://i.pinimg.com/236x/31/18/d9/3118d99817b767745a4becbae3b87c9b.jpg" },
        { url: "https://i.pinimg.com/236x/30/12/2a/30122a5b2ca52e2395a0a66b695e444f.jpg" },
    ];

    await prisma.img.createMany({
        data: images.map((image) => ({ img: image.url })),
    });

    await prisma.boards.create({
        data: {
            boardName: 'My board',
        },
    });

    await prisma.boardImg.create({
        data: {
            board: {
                connect: {
                    board_id: 1,
                },
            },
            img: {
                connect: {
                    img_id: 1,
                },
            },
        },
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
