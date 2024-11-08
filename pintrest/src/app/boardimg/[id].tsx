import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

const Boardpage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Board: {id}</h1>
      <div className="max-w-sm relative group mb-4 break-inside-avoid border-none drop-shadow-2xl">
        <div className="relative group-hover:brightness-50 transition-all duration-300">
          <Image
            loading="lazy"
            src="https://i.pinimg.com/474x/26/e8/ff/26e8ffa66c6d87beeaa328f28a373b8f.jpg"
            className="rounded-xl"
            alt="Image"
            width={250}
            height={200}
          />
        </div>
      </div>
    </>
  );
};

export default Boardpage;
