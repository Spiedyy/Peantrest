import { Card, CustomFlowbiteTheme, Flowbite, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { getBoards } from "./severside";
import { Boards } from "../../lib/response";
import "./scrollbar.css";

export function Modalcomp({ openModal, setOpenModal }) {
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

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Modal
        dismissible
        show={openModal}
        onClose={closeModal}
        className="bg-neutral-900 drop-shadow-xl"
      >
        {/* text must be diffrent color */}
        <div className="flex bg-neutral-900 border-neutral-800 border-b rounded-t-md p-4">
          <div className="text-neutral-300 text-lg font-semibold">
            Save image to board
          </div>
          <button
            aria-label="Close"
            className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-neutral-600 hover:text-gray-400"
            type="button"
            onClick={closeModal}
          >
            <svg
              stroke="currentColor"
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
        <div className="p-4 flex bg-neutral-900">
          <button>
            <div className="space-y-6 h-96 overflow-hidden">
              <div className="grid grid-cols-2 text-base leading-relaxed text-gray-500 gap-4 h-96 pb-4 overflow-auto scrollbar-hidden">
                {boards?.map((board) => (
                  <Card
                    className="max-w-fit bg-neutral-900 border-none drop-shadow-lg h-64 flex flex-col"
                    key={board.board_id}
                  >
                    <div className="flex flex-col justify-start h-full">
                      <h5 className="text-2xl font-bold tracking-tight text-center text-white mb-2">
                        {board.boardName}
                      </h5>
                      <div className="image-gallery flex justify-center">
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
              </div>
            </div>
          </button>
        </div>
        <Modal.Footer className="bg-neutral-900 border-neutral-800">
          <button
            className="rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            onClick={() => closeModal()}
          >
            Save
          </button>

          <button
            onClick={closeModal}
            className="rounded-lg bg-neutral-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700 focus:outline-none focus:ring-4 focus:ring-neutral-500 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Back
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
