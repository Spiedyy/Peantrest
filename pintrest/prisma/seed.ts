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
    ];

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
