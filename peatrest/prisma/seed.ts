import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "User",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_O86oFjR8kk8ZprcmqcEQfgooMkeGZQGC-A&s",
    },
  });

  const images = [
    { url: "https://i.pinimg.com/1200x/4d/ff/d4/4dffd40a4c83c11287745333be1394ff.jpg" },
    { url: "https://i.pinimg.com/280x280_RS/9f/2e/0e/9f2e0e9f4565525bb7cc058839f7a491.jpg" },
    { url: "https://i.pinimg.com/474x/3c/70/7d/3c707d6425799daa319882ff58b0686d.jpg" },
    { url: "https://i.pinimg.com/474x/33/fd/ce/33fdce9cbd937f7e416689457e70ca83.jpg" },
    { url: "https://i.pinimg.com/474x/20/a7/5d/20a75d71bcfe5827cd2f50925159d910.jpg" },
    { url: "https://i.pinimg.com/474x/01/0f/70/010f705186265835eb764ce8b2d629fc.jpg" },
    { url: "https://i.pinimg.com/474x/a1/56/24/a15624775eea920776fc9c7d6cdeacd2.jpg" },
    { url: "https://i.pinimg.com/474x/02/08/da/0208dabad57bd31467133112c147c1f1.jpg" },
    { url: "https://i.pinimg.com/736x/e4/2d/5e/e42d5e7295a3cd2dc9a0af96ab09cc33.jpg" },
    { url: "https://i.pinimg.com/474x/00/06/1c/00061ca234e87edf1d4c227170bd1739.jpg" },
    { url: "https://i.pinimg.com/474x/ab/18/2e/ab182e32d28c246b3ab691f8d3a693c1.jpg" },
    { url: "https://i.pinimg.com/474x/dd/66/e9/dd66e9eea2f39b20f0bf5b8c750f43d2.jpg" },
    { url: "https://i.pinimg.com/474x/0d/37/b9/0d37b95d86713ce72ca19e8c23c87c64.jpg" },
    { url: "https://i.pinimg.com/474x/ac/dc/eb/acdcebba345e8ba5e28eed7edfd58abc.jpg" },
    { url: "https://i.pinimg.com/474x/ff/83/3e/ff833e02c1827aaae1b7ae08865be160.jpg" },
    { url: "https://i.pinimg.com/474x/34/bd/0e/34bd0e5b741509d98d609f0f01d4648c.jpg" },
    { url: "https://i.pinimg.com/474x/39/e8/2e/39e82ee0c2887f42b372172d4ca182aa.jpg" },
    { url: "https://i.pinimg.com/474x/59/9f/52/599f52478952b06560e4c6283e424612.jpg" },
    { url: "https://i.pinimg.com/474x/c2/43/73/c24373ca03cbd33720e1463d01a482d2.jpg" },
    { url: "https://i.pinimg.com/736x/98/1e/91/981e9144c60735da478dbd7994505770.jpg" },
    { url: "https://i.pinimg.com/736x/46/59/bb/4659bb28268061d3c31d6ccbe0cd9585.jpg" },
    { url: "https://i.pinimg.com/736x/c8/a3/a9/c8a3a9687f8418d971851848947d578e.jpg" },
    { url: "https://i.pinimg.com/736x/ca/55/d8/ca55d8d74e3bce9bd23818b16f09e35c.jpg" },
    { url: "https://i.pinimg.com/474x/fa/19/26/fa1926df805baa9e13bdace25ad66151.jpg" },
    { url: "https://i.pinimg.com/474x/9d/94/66/9d9466de97ebc6d7b5e7020354365d0a.jpg" },
    { url: "https://i.pinimg.com/474x/13/63/26/136326537bdaf5886130bc47ba7c917b.jpg" },
    { url: "https://i.pinimg.com/474x/dc/43/4d/dc434db21c9789f95ab725ab93c9621f.jpg" },
    { url: "https://i.pinimg.com/474x/ae/7b/5f/ae7b5f151c0933fadb1db0f46f297803.jpg" },
    { url: "https://i.pinimg.com/474x/94/ec/8a/94ec8aa686bacdf73872c6d0781ac44e.jpg" },
    { url: "https://i.pinimg.com/474x/60/87/e7/6087e7c7a32207546e5fc3e47f1d68b3.jpg" },
    { url: "https://i.pinimg.com/474x/39/6e/f3/396ef3b1f6cc2f25b0210c6bf455862b.jpg" },
    { url: "https://i.pinimg.com/474x/01/ac/bb/01acbb3a0b7baa13091bf695e9ae19d3.jpg" },
    { url: "https://i.pinimg.com/474x/2d/5c/5f/2d5c5f1cedf8ea09faa8ab39414d3d78.jpg" },
    { url: "https://i.pinimg.com/474x/9d/ca/88/9dca88583fe85d6cb1553e335f7d8410.jpg" },
    { url: "https://i.pinimg.com/474x/05/56/41/055641824eda394de0e4f88028ac8c06.jpg" },
    { url: "https://i.pinimg.com/236x/88/89/87/888987eb3e0d2eb2d2522eb55ef93b10.jpg" },
    { url: "https://i.pinimg.com/236x/44/8b/c6/448bc6b334e4380e1e36565621881f29.jpg" },
    { url: "https://i.pinimg.com/236x/42/57/73/4257736b25b267664c6f101df3f37307.jpg" },
    { url: "https://i.pinimg.com/236x/7e/46/8d/7e468dc5308c90aea40d019f2895f742.jpg" },
    { url: "https://i.pinimg.com/236x/be/6b/f7/be6bf7060b6c8af78a715fd800e7b84b.jpg" },
    { url: "https://i.pinimg.com/236x/29/57/1b/29571bd444ab9163b42e4397264348a1.jpg" },
    { url: "https://i.pinimg.com/236x/3f/bd/3a/3fbd3a3c9778b6e3c8823cc2bd5ce953.jpg" },
    { url: "https://i.pinimg.com/236x/43/d6/68/43d668ac7c69d6dadb09e2d05f88deab.jpg" },
    { url: "https://i.pinimg.com/236x/57/d1/26/57d1266dd51466d0a7e0fe69fa824245.jpg" },
    { url: "https://i.pinimg.com/236x/73/e9/aa/73e9aae527fa2e99e7f5a5265a287a01.jpg" },
  ];
  
  


  await prisma.img.createMany({
    data: images.map((image) => ({ img: image.url })),
  });

  await prisma.boards.create({
    data: {
      boardName: "Board",
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
