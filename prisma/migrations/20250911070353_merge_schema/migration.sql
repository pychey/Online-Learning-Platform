/*
  Warnings:

  - You are about to drop the `coursecontent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `coursecontent` DROP FOREIGN KEY `CourseContent_courseId_fkey`;

-- DropIndex
ALTER TABLE `CourseContentProgress` DROP FOREIGN KEY `CourseContentProgress_courseContentSlug_fkey`;
DROP INDEX `CourseContentProgress_courseContentSlug_fkey` ON `CourseContentProgress`;

-- DropIndex
ALTER TABLE `Lesson` DROP FOREIGN KEY `Lesson_courseContentId_fkey`;
DROP INDEX `Lesson_courseContentId_fkey` ON `Lesson`;

-- DropTable
DROP TABLE `coursecontent`;

-- CreateTable
CREATE TABLE `CourseContent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `slug` VARCHAR(191) NULL,
    `order_number` INTEGER NULL,
    `icon_url` VARCHAR(191) NULL,
    `introduction_text` LONGTEXT NULL,
    `starting_paragraph` LONGTEXT NULL,
    `body_paragraph` LONGTEXT NULL,
    `ending_paragraph` LONGTEXT NULL,
    `courseId` INTEGER NULL,

    UNIQUE INDEX `CourseContent_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CourseContent` ADD CONSTRAINT `CourseContent_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lesson` ADD CONSTRAINT `Lesson_courseContentId_fkey` FOREIGN KEY (`courseContentId`) REFERENCES `CourseContent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CourseContentProgress` ADD CONSTRAINT `CourseContentProgress_courseContentSlug_fkey` FOREIGN KEY (`courseContentSlug`) REFERENCES `CourseContent`(`slug`) ON DELETE RESTRICT ON UPDATE CASCADE;
