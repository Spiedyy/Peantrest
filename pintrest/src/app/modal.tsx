import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { getBoards, saveImageToBoard } from "./severside";
import { Boards } from "../../lib/response";
import "./scrollbar.css";

export function Modalcomp({
  openModal,
  setOpenModal,
  selectedImage,
  setSelectedImage,
}) {
  const [boards, setBoards] = useState<Boards[] | null>(null);

  const [selectedboard, setSelectedBoard] = useState<number | null>(null);

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

  // add a create board board as the last board
  return (
    <div>
      <Modal
        dismissible
        show={openModal}
        onClose={closeModal}
        className="bg-neutral-900 drop-shadow-xl"
      >
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
          <div className="grid grid-cols-2 text-base leading-relaxed text-gray-500 gap-4 h-96 pb-4 overflow-auto scrollbar-hidden">
            {boards?.map((board) => (
              <div>
                <div
                  className="border-none h-48 rounded-lg group transition-transform duration-300 hover:cursor-pointer"
                  tabIndex={0}
                  key={board.board_id}
                  onClick={() => setSelectedBoard(board.board_id)}
                >
                  <div className="flex h-48 gap-[1px]">
                    <div className="flex-1">
                      <img
                        src={
                          board.images?.[0]?.img?.img ||
                          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1200px-HD_transparent_picture.png"
                        }
                        alt={board.boardName}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:brightness-50"
                      />
                    </div>

                    <div className="flex flex-col gap-[1px] h-full w-1/3">
                      {board.images.slice(1, 3).map((image) => (
                        <div className="flex-1" key={image.img.img_id}>
                          <img
                            src={image.img.img}
                            alt={board.boardName}
                            className="w-full h-24 object-cover transition-transform duration-3600 group-hover:brightness-50"
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
            ))}
          </div>
        </div>
        <Modal.Footer className="bg-neutral-900 border-neutral-800 z-50">
          <button
            className="rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            onClick={() => {
              if (selectedboard !== null) {
                saveImageToBoard(selectedboard, selectedImage);
                closeModal();
              } else {
                console.error("No board selected");
              }
            }}
          >
            Save
          </button>

          <button
            onClick={closeModal}
            className="rounded-lg bg-neutral-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Back
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
