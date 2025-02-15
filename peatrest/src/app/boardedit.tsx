"use client";

import { deleteBoard } from "./severside";
import { useCallback, useState } from "react";
import Input from "./inputfield";
import { changeBoardName } from "./severside";

export function BoardOptions({
  board,
  id,
  setBoards,
  setShowNotification,
  setChangesNotification,
  setDeleteBoard,
  setNewBoardName,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [newName, setNewName] = useState("");

  const handleDelete = async () => {
    try {
      await deleteBoard(id);
      setShowNotification(true);
      setDeleteBoard(board.boardName);

      setBoards((prev: any) =>
        prev.filter((board: any) => board.board_id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  function handleChanges() {
    if (newName !== "") {
      changeBoardName(newName, id);
      setOpenModal(false);
      setNewBoardName(newName);
      setNewName("");
      setChangesNotification(true);
    }
  }

  return (
    <>
      <button
        className="absolute opacity-0 group-hover:opacity-100 hover:brightness-50 transition-opacity duration-300 z-10 cursor-pointer p-2"
        onClick={() => setOpenModal(true)}
        aria-label="Board Options"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
          <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
        </svg>
      </button>

      <div
        className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-all duration-300 ease-in-out ${
          openModal ? "opacity-100 z-50" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-neutral-900 p-8 rounded-lg shadow-xl w-full max-w-md">
          <div className="flex justify-between items-center mb-4 border-b border-neutral-800 pb-2">
            <h2 className="text-lg font-semibold text-white">
              Edit Board: {board.boardName}
            </h2>
            <button
              onClick={() => setOpenModal(false)}
              className="text-red-600 hover:text-red-700"
              aria-label="Close"
            >
              ✖
            </button>
          </div>

          <div>
            <Input
              board={board}
              setNewName={setNewName}
              newName={newName}
            ></Input>
            <div className="flex justify-center gap-4">
              <button
                className="bg-green-700 hover:bg-green-800 text-white rounded-lg p-4"
                onClick={() => {
                  handleChanges();
                }}
              >
                <h3 className="font-bold">Save changes</h3>
              </button>
              <button
                className="bg-red-700 hover:bg-red-800 text-white rounded-lg p-4"
                onClick={() => {
                  handleDelete();
                }}
              >
                <h3 className="font-bold">Delete Board</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
