-- CreateTable
CREATE TABLE "User" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Img" (
    "img_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "img" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Boards" (
    "board_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "board" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BoardImg" (
    "board_id" INTEGER NOT NULL,
    "img_id" INTEGER NOT NULL,

    PRIMARY KEY ("board_id", "img_id"),
    CONSTRAINT "BoardImg_board_id_fkey" FOREIGN KEY ("board_id") REFERENCES "Boards" ("board_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BoardImg_img_id_fkey" FOREIGN KEY ("img_id") REFERENCES "Img" ("img_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
