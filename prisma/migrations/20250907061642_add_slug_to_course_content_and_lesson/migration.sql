/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `CourseContent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Lesson` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `CourseContent` ADD COLUMN `slug` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Lesson` ADD COLUMN `slug` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `CourseContent_slug_key` ON `CourseContent`(`slug`);

-- CreateIndex
CREATE UNIQUE INDEX `Lesson_slug_key` ON `Lesson`(`slug`);
