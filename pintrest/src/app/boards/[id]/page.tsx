"use client";
import { getBoard } from "@/app/severside";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Boards } from "../../../../lib/response";
import { Navcomp } from "@/app/navbar";

export default function board({ params }) {
  const [board, setBoard] = useState<Boards | null>(null);

  useEffect(() => {
    getBoard(parseInt(params.id, 10)).then((res) => {
      setBoard(res);
    });
  }, []);

  return (
    <>
      <Navcomp />
      <h2 className="flex justify-center p-4 font-bold text-3xl">{board?.boardName}</h2>
      <div className="p-8 column columns-2 md:columns-5 xl:columns-7">
        {board?.images?.map((image) => (
          <div className="max-w-sm relative group mb-4 break-inside-avoid border-none drop-shadow-2xl">
            <div className="relative group-hover:brightness-50 transition-all duration-300">
              <Image
                loading="lazy"
                src={image.img.img}
                className="rounded-xl"
                alt="Image"
                width={250}
                height={200}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}