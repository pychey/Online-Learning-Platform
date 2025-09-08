/*
  Warnings:

  - You are about to alter the column `original_price` on the `Course` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `discounted_price` on the `Course` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `discount_percent` on the `Course` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to drop the column `program_icon_url` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `rating` on table `Course` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
ALTER TABLE `Certificate` DROP FOREIGN KEY `Certificate_userId_fkey`;
DROP INDEX `Certificate_userId_fkey` ON `Certificate`;

-- DropIndex
ALTER TABLE `OtpToken` DROP FOREIGN KEY `OtpToken_userId_fkey`;
DROP INDEX `OtpToken_userId_fkey` ON `OtpToken`;

-- AlterTable
ALTER TABLE `Course` MODIFY `online_percent` VARCHAR(191) NULL,
    MODIFY `rating` INTEGER NOT NULL,
    MODIFY `original_price` VARCHAR(191) NULL,
    MODIFY `discounted_price` VARCHAR(191) NULL,
    MODIFY `discount_percent` VARCHAR(191) NULL,
    MODIFY `detail_text` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `Program` DROP COLUMN `program_icon_url`,
    ADD COLUMN `program_icon` VARCHAR(191) NULL,
    MODIFY `about_text` LONGTEXT NULL;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NULL,
    `lastName` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `emailVerified` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CourseContent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `order_number` INTEGER NULL,
    `icon_url` VARCHAR(191) NULL,
    `introduction_text` LONGTEXT NULL,
    `starting_paragraph` LONGTEXT NULL,
    `body_paragraph` LONGTEXT NULL,
    `ending_paragraph` LONGTEXT NULL,
    `isCompleted` BOOLEAN NOT NULL DEFAULT false,
    `courseId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lesson` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `order_number` INTEGER NOT NULL,
    `key_takeaway_text` LONGTEXT NULL,
    `isCompleted` BOOLEAN NOT NULL DEFAULT false,
    `courseContentId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LessonContent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_number` INTEGER NULL,
    `content_type` VARCHAR(191) NULL,
    `content` LONGTEXT NULL,
    `lessonId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Certificate` ADD CONSTRAINT `Certificate_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CourseContent` ADD CONSTRAINT `CourseContent_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lesson` ADD CONSTRAINT `Lesson_courseContentId_fkey` FOREIGN KEY (`courseContentId`) REFERENCES `CourseContent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LessonContent` ADD CONSTRAINT `LessonContent_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lesson`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OtpToken` ADD CONSTRAINT `OtpToken_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
