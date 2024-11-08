import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { getBoards, saveImageToBoard, createBoard } from "./severside";
import { Boards } from "../../lib/response";
import "./scrollbar.css";
import { Savenotifacation } from "./savenotification";
import { Popovercomp } from "./popover";

export function Modalcomp({
  openModal,
  setOpenModal,
  selectedImage,
  setSelectedImage,
}) {
  const [boards, setBoards] = useState<Boards[] | null>(null);
  const [selectedboard, setSelectedBoard] = useState<number | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [AlertBoardName, setAlertBoardName] = useState("");

  const updateBoards = () => {
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
  };

  useEffect(() => {
    updateBoards();
  }, []);

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleClick = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  const [openCreateBoardModal, setOpenCreateBoardModal] = useState(false);

  const openCreateModal = () => setOpenCreateBoardModal(true);
  const closeCreateModal = () => setOpenCreateBoardModal(false);

  return (
    <>
      {showNotification && (
        <Savenotifacation boardName={AlertBoardName} board_id={selectedboard} />
      )}
      <div>
        <Modal
          dismissible
          show={openModal}
          onClose={closeModal}
          className="bg-neutral-900 drop-shadow-xl"
        >
          <div className="flex bg-neutral-900 border-neutral-800 border-b rounded-t-md p-4">
            <div className="text-neutral-300 text-lg font-semibold">
              Save image to a board
            </div>
            <button
              aria-label="Close"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-neutral-600 hover:text-gray-400"
              type="button"
              onClick={closeModal}
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
            <div className="grid grid-cols-2 w-full text-base leading-relaxed text-gray-500 gap-4 h-96 pb-4 overflow-auto scrollbar-hidden">
              <div
                className="border-none h-48 flex justify-center items-center bg-neutral-800 hover:bg-neutral-700 rounded-md cursor-pointer transition-colors"
                onClick={() => {
                  openCreateModal();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 text-neutral-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </div>

              <Popovercomp
                openModal={openCreateBoardModal}
                setOpenModal={setOpenCreateBoardModal}
                setBoards={setBoards}
              />

              {boards?.map((board) => (
                <div key={board.board_id}>
                  <div
                    className="border-none h-48 group transition-transform duration-300 hover:cursor-pointer"
                    tabIndex={0}
                    onClick={() => {
                      setSelectedBoard(board.board_id);
                      saveImageToBoard(board.board_id, selectedImage);
                      closeModal();
                      handleClick();
                      setAlertBoardName(board.boardName);
                      updateBoards();
                    }}
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
                        {board.images?.slice(1, 3).map((image) => (
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
                      {board.images?.length > 0
                        ? board.images?.length + " pins"
                        : "0 pins"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
