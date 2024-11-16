"use client";

import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { deleteBoard } from "./severside";

export function Editmodal({ openEdit, closeEdit, board }) {
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    setOpenModal(openEdit);
  }, [openEdit, board]);

  const handleClose = () => {
    setOpenModal(false);
    closeEdit();
  };

  return (
    <>
      <Modal
        dismissible
        show={openModal}
        onClose={handleClose}
        className="bg-neutral-900 drop-shadow-xl"
      >
        <div className="flex bg-neutral-900 border-neutral-800 border-b rounded-t-md p-4">
          <div className="text-neutral-300 text-lg font-semibold">
            Edit board {board.boardName}
          </div>
          <button
            aria-label="Close"
            className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-neutral-600 hover:text-gray-400"
            type="button"
            onClick={handleClose}
          >
            <svg
              stroke="red"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-8 flex justify-center bg-neutral-900">
          <div className="">
            <input
              id="#"
              type="#"
              placeholder={board.boardName}
              className="bg-neutral-900 placeholder-neutral-700 text-neutral-500 rounded border-b-2 border-neutral-800 focus:outline-none"
            />
          </div>
          <div>
            <button
              onClick={() => {
                deleteBoard(board.board_id);
                handleClose();
              }}
            >
              <div>
                <p className="font-bold text-red-800">Delete</p>
                <p>your board including all pins with no recovery possible</p>
              </div>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
