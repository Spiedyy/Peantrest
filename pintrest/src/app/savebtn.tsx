"use client";

import { useState, useEffect } from "react";
import { Button, Card, Modal } from "flowbite-react";
import { getBoards } from "./severside";
import { Boards } from "../../lib/response";

export function Savebtn() {
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

    const [openModal, setOpenModal] = useState(false);
    const handleSaveClick = () => {
        setOpenModal(true);
    };
    const closeModal = () => {
        setOpenModal(false);
    };

    const modalelement = <Modal dismissible show={openModal} onClose={closeModal} className="bg-neutral-900">
        <Modal.Header>Save image to board</Modal.Header>
        <Modal.Body>
            <button>
                <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 ">
                        {boards?.map((board) => (
                            <Card className="max-w-fit">
                                <div key={board.board_id}>
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
                            </Card>
                        ))}
                    </p>
                </div>
            </button>
        </Modal.Body>
        <Modal.Footer>
            <button
                className="rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                onClick={() => closeModal()}
            >
                Save
            </button>

            <button onClick={closeModal} className="rounded-lg bg-neutral-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Back
            </button>
        </Modal.Footer>
    </Modal>;

    return (
        <div className="p-4 absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
                onClick={handleSaveClick}
                className="rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
                Save
            </button>

            <div className="text-red-">
                {modalelement}
            </div>
        </div>
    );
}
