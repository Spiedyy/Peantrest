"use client";

import { Alert } from "flowbite-react";

export function DeleteImageNotification() {

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-auto p-4 z-50">
      <Alert className="bg-red-700 text-white">
        <span className="font-medium">Your image has been deleted</span>
      </Alert>
    </div>
  );
}
