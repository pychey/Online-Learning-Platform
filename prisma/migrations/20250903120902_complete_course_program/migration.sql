/*
  Warnings:

  - You are about to drop the column `certificate_img` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `certificate_type` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `logo` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `price_each_course` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `program_icon` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `program_name` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `required_courses` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the `Courses` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `program_title` to the `Program` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Program` DROP COLUMN `certificate_img`,
    DROP COLUMN `certificate_type`,
    DROP COLUMN `logo`,
    DROP COLUMN `price_each_course`,
    DROP COLUMN `program_icon`,
    DROP COLUMN `program_name`,
    DROP COLUMN `required_courses`,
    ADD COLUMN `about_text` VARCHAR(191) NULL,
    ADD COLUMN `additional_price` VARCHAR(191) NULL,
    ADD COLUMN `certificate_img_url` VARCHAR(191) NULL,
    ADD COLUMN `certificate_name` VARCHAR(191) NULL,
    ADD COLUMN `firstDesignedFor_text` VARCHAR(191) NULL,
    ADD COLUMN `logo_url` VARCHAR(191) NULL,
    ADD COLUMN `program_icon_url` VARCHAR(191) NULL,
    ADD COLUMN `program_title` VARCHAR(191) NOT NULL,
    ADD COLUMN `secondDesignedFor_text` VARCHAR(191) NULL,
    ADD COLUMN `thirdDesignedFor_text` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Courses`;

-- CreateTable
CREATE TABLE `Course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `img_url` VARCHAR(191) NULL,
    `youtube_url` VARCHAR(191) NULL,
    `certificate_type` VARCHAR(191) NULL,
    `duration` VARCHAR(191) NULL,
    `online_percent` INTEGER NULL,
    `slug` VARCHAR(191) NULL,
    `rating` DOUBLE NULL,
    `original_price` DOUBLE NULL,
    `discounted_price` DOUBLE NULL,
    `discount_percent` DOUBLE NULL,
    `title` VARCHAR(191) NOT NULL,
    `study_type` VARCHAR(191) NULL,
    `language` VARCHAR(191) NULL,
    `level` VARCHAR(191) NULL,
    `access` VARCHAR(191) NULL,
    `introduction_text` VARCHAR(191) NULL,
    `first_skill` VARCHAR(191) NULL,
    `second_skill` VARCHAR(191) NULL,
    `third_skill` VARCHAR(191) NULL,
    `main_text` VARCHAR(191) NULL,
    `detail_text` VARCHAR(191) NULL,
    `conclusion_text` VARCHAR(191) NULL,
    `programId` INTEGER NULL,

    UNIQUE INDEX `Course_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_programId_fkey` FOREIGN KEY (`programId`) REFERENCES `Program`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
