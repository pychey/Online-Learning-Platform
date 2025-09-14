/*
  Warnings:

  - You are about to drop the `complete` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `complete` DROP FOREIGN KEY `Complete_courseSlug_fkey`;

-- DropForeignKey
ALTER TABLE `complete` DROP FOREIGN KEY `Complete_userId_fkey`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `isAdmin` BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE `complete`;

-- CreateTable
CREATE TABLE `Complete` (
    `userId` INTEGER NOT NULL,
    `courseSlug` VARCHAR(191) NOT NULL,
    `score` INTEGER NOT NULL DEFAULT 0,
    `total` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`userId`, `courseSlug`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Complete` ADD CONSTRAINT `Complete_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Complete` ADD CONSTRAINT `Complete_courseSlug_fkey` FOREIGN KEY (`courseSlug`) REFERENCES `Course`(`slug`) ON DELETE RESTRICT ON UPDATE CASCADE;
