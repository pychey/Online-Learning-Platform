/*
  Warnings:

  - You are about to drop the column `isCompleted` on the `coursecontent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `coursecontent` DROP COLUMN `isCompleted`;

-- CreateTable
CREATE TABLE `CourseContentProgress` (
    `userId` INTEGER NOT NULL,
    `courseContentId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `courseContentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CourseContentProgress` ADD CONSTRAINT `CourseContentProgress_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CourseContentProgress` ADD CONSTRAINT `CourseContentProgress_courseContentId_fkey` FOREIGN KEY (`courseContentId`) REFERENCES `CourseContent`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
