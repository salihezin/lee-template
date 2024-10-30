/*
  Warnings:

  - You are about to drop the column `sortOder` on the `NavbarMenu` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_NavbarMenu" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "sortOrder" INTEGER,
    "mainMenu" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL,
    "parentId" INTEGER,
    CONSTRAINT "NavbarMenu_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "NavbarMenu" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_NavbarMenu" ("icon", "id", "isActive", "parentId", "title", "url") SELECT "icon", "id", "isActive", "parentId", "title", "url" FROM "NavbarMenu";
DROP TABLE "NavbarMenu";
ALTER TABLE "new_NavbarMenu" RENAME TO "NavbarMenu";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
