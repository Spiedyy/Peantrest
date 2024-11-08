/*
  Warnings:

  - Added the required column `boardName` to the `Boards` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Boards" (
    "board_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "boardName" TEXT NOT NULL,
    "board" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Boards" ("board", "board_id", "createdAt", "updatedAt") SELECT "board", "board_id", "createdAt", "updatedAt" FROM "Boards";
DROP TABLE "Boards";
ALTER TABLE "new_Boards" RENAME TO "Boards";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
