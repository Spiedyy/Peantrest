import { useEffect, useState } from "react";
import { Createboard } from "./severside";

export function Popovercomp({ openModal, setOpenModal, setBoards }) {
  const [boardName, setBoardName] = useState("");
  const boardname = document.getElementById("boardName") as HTMLInputElement;

  useEffect(() => {
    if (openModal) {
      setBoardName("");
    }
  }, [openModal]);

  const handleinputchange = (e) => {
    setBoardName(e.target.value);
  };

  const handleCreateBoard = async () => {
    if (!boardName.trim()) {
      alert("Please enter a board name.");
      return;
    }
    try {
      const newBoard = await Createboard(boardName);
      setBoards((prevBoards) =>
        prevBoards ? [...prevBoards, newBoard] : [newBoard]
      );
      setOpenModal(false);
    } catch (error) {
      console.error("Error creating board:", error);
    }
  };

  return (
    <>
      {openModal && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50`}
          onClick={() => setOpenModal(false)}
        >
          <div
            className="bg-neutral-900 rounded-lg shadow-lg w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-neutral-900 text-neutral-300 p-4 border-b border-neutral-700 rounded-t-lg">
              <h2 className="text-lg font-semibold">Create a New Board</h2>
            </div>
            <div className="p-6">
              <input
                className="w-full p-2 bg-neutral-800 text-neutral-200 border-neutral-700 rounded-md focus:ring-0"
                type="text"
                placeholder="Enter board name..."
                id="boardName"
                onChange={handleinputchange}
              />
            </div>

            <div className="p-4 flex justify-start gap-2 border-t border-neutral-700">
              <button
                className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition"
                onClick={() => {
                  handleCreateBoard();
                }}
              >
                Create
              </button>
              <button
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
