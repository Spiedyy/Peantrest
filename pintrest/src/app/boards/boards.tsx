"use client";
import { Card } from "flowbite-react";
import { getBoards } from "../severside";
import { useEffect, useState } from "react";
import { Boards } from "../../../lib/response"

export function Boardscomp() {
    const [boards, setBoards] = useState<Boards[] | null>(null);

    useEffect(() => {
        getBoards().then((res) => {
            const boards = res.data.boards.map((board: any) => ({
                ...board,
                images: board.images || []
            }));
            setBoards(boards);
        });
    }, []);

    return (
        boards?.map((board) => (
            <Card href="#" className="p-4 max-w-72" key={board.board_id}>
                <h5 className="text-2xl font-bold tracking-tight text-white">
                    {board.boardName}
                </h5>
                <p className="font-normal text-gray-400">
                    {board.board_id}
                </p>
            </Card>
        ))
    );
}
