"use client";

import { Alert } from "flowbite-react";
import { useRouter } from "next/navigation";

export function Savenotifacation({ boardName, board_id }) {
  const router = useRouter();

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-auto p-4 z-50">
      <Alert className="bg-neutral-700 text-white">
        <span className="font-medium">Pin saved to </span>
        <button
          className="underline"
          onClick={() => router.push(`/boards/${board_id}`)}
        >
          {boardName}
        </button>
      </Alert>
    </div>
  );
}
