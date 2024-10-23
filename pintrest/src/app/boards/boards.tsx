"use client";
import { Card } from "flowbite-react";
import { getBoards } from "../severside";
import { useEffect, useState } from "react";
import { Boards } from "../../../lib/response"

export function Boardscomp() {
    const [boards, setBoards] = useState<Boards[] | null>(null);

    useEffect(() => {
        getBoards()
            .then((res) => {
                const boards = res.map((board: any) => ({
                    ...board,
                    images: board.images.map((image: any) => ({
                        ...image,
                        img: {
                            ...image.img,
                            board_id: board.board_id
                        }
                    }))
                }));

                setBoards(boards)
            })
    }, []);

    return (
        boards?.map((board) => (
            <Card href="#" className="p-4 max-w-72" key={board.board_id}>
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
            </Card>
        ))
    );
}
