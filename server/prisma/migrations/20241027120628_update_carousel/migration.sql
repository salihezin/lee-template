-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Carousel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "sortOrder" INTEGER,
    "carouselUrl" TEXT NOT NULL DEFAULT '/#',
    "carouselButtonLabel" TEXT NOT NULL DEFAULT 'Haberin Detayı',
    "isActive" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Carousel" ("createdAt", "description", "id", "image", "isActive", "sortOrder", "title", "updatedAt") SELECT "createdAt", "description", "id", "image", "isActive", "sortOrder", "title", "updatedAt" FROM "Carousel";
DROP TABLE "Carousel";
ALTER TABLE "new_Carousel" RENAME TO "Carousel";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
