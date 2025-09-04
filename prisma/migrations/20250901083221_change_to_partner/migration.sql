/*
  Warnings:

  - You are about to drop the `Parter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Parter`;

-- CreateTable
CREATE TABLE `Partner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `logo_img` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
