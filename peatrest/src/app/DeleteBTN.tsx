import { RemoveImageFromBoard } from "./severside";

export function DeleteBtn({
  boardid,
  imgid,
  updateBoards,
  setShowNotification,
}) {
  return (
    <div className="p-4 absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
      <button
        className="rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none"
        onClick={() => {
          RemoveImageFromBoard(boardid, imgid);
          updateBoards();
          setShowNotification(true);
          setTimeout(() => {
            setShowNotification(false);
          }, 2500);
        }}
      >
        Delete
      </button>
    </div>
  );
}
