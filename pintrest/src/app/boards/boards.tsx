"use client";
import { getBoards } from "../severside";
import { useEffect, useState } from "react";
import { Boards } from "../../../lib/response";

export function Boardscomp() {
  const [boards, setBoards] = useState<Boards[] | null>(null);

  useEffect(() => {
    getBoards().then((res) => {
      const boards = res.map((board: any) => ({
        ...board,
        images: board.images.map((image: any) => ({
          ...image,
          img: {
            ...image.img,
            board_id: board.board_id,
          },
        })),
      }));

      setBoards(boards);
    });
  }, []);

  return (
    <div className="grid grid-cols-7 p-8 gap-4">
      {boards?.map((board) => (
        <div
          className="max-w-72 bg-neutral-800 border-none shadow-lg rounded-md h-52 py-2"
          key={board.board_id}
        >
          <h5 className="text-2xl font-bold tracking-tight text-center text-white">
            {board.boardName}
          </h5>
          <div className="image-gallery flex justify-center max-w-72">
            {board.images.slice(0, 3).map((image) => (
              <img
                src={image.img.img}
                alt={board.boardName}
                className="w-full h-auto max-w-[70px] m-1"
                key={image.img.img_id}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
