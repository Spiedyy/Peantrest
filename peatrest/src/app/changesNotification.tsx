"use client";

import { Alert } from "flowbite-react";

export function ChangesNotification() {

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-auto p-4 z-50">
      <Alert className="bg-neutral-700 text-white">
        <span className="font-medium">Your changes have been saved</span>
      </Alert>
    </div>
  );
}
