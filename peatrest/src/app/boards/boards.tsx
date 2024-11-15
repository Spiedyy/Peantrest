"use client";
import { getBoards } from "../severside";
import { useEffect, useState } from "react";
import { Boards } from "../../../lib/response";
import { useRouter } from "next/navigation";
import { BoardOptions } from "../boardedit";

export function Boardscomp() {
  const [boards, setBoards] = useState<Boards[] | null>(null);
  const router = useRouter();

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
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-8">
        {boards?.map((board) => (
          <>
            <div className="relative rounded-md overflow-hidden group transition-all duration-300 hover:cursor-pointer">
              <div
                className="max-w-xs border-none shadow-lg rounded-md overflow-hidden"
                key={board.board_id}
              >
                <div className="flex justify-end pr-1">
                  <BoardOptions board={board} id={board.board_id} />
                </div>
                <div
                  className="flex h-48 gap-[1px] bg-neutral-800"
                  onClick={() => router.push(`/boards/${board.board_id}`)}
                >
                  <div className="flex-1">
                    <img
                      src={
                        board.images?.[0]?.img?.img ||
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1200px-HD_transparent_picture.png"
                      }
                      alt={board.boardName}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
                    />
                  </div>

                  <div className="flex flex-col gap-[1px] h-full w-1/3">
                    {board.images.slice(1, 3).map((image) => (
                      <div className="flex-1" key={image.img.img_id}>
                        <img
                          src={image.img.img}
                          alt={board.boardName}
                          className="w-full h-24 object-cover transition-all duration-300 group-hover:brightness-50"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-start text-white pt-2">
                  {board.boardName}
                </h5>
                <p className="text-sm text-neutral-300 mb-2">
                  {board.images.length} pins
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
