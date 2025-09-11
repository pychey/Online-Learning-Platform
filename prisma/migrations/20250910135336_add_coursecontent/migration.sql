/*
  Warnings:

  - The primary key for the `coursecontentprogress` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `courseContentId` on the `coursecontentprogress` table. All the data in the column will be lost.
  - Added the required column `courseContentSlug` to the `CourseContentProgress` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `coursecontentprogress` DROP FOREIGN KEY `CourseContentProgress_courseContentId_fkey`;

-- DropIndex
DROP INDEX `CourseContentProgress_courseContentId_fkey` ON `coursecontentprogress`;

-- AlterTable
ALTER TABLE `coursecontentprogress` DROP PRIMARY KEY,
    DROP COLUMN `courseContentId`,
    ADD COLUMN `courseContentSlug` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`userId`, `courseContentSlug`);

-- AddForeignKey
ALTER TABLE `CourseContentProgress` ADD CONSTRAINT `CourseContentProgress_courseContentSlug_fkey` FOREIGN KEY (`courseContentSlug`) REFERENCES `CourseContent`(`slug`) ON DELETE RESTRICT ON UPDATE CASCADE;
