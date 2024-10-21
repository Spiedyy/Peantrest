/*
  Warnings:

  - You are about to drop the column `board` on the `Boards` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Boards" (
    "board_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "boardName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Boards" ("boardName", "board_id", "createdAt", "updatedAt") SELECT "boardName", "board_id", "createdAt", "updatedAt" FROM "Boards";
DROP TABLE "Boards";
ALTER TABLE "new_Boards" RENAME TO "Boards";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
