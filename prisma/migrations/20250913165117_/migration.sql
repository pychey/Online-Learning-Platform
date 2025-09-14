/*
  Warnings:

  - You are about to drop the column `correct_answer` on the `quiz` table. All the data in the column will be lost.
  - You are about to drop the column `first_answer` on the `quiz` table. All the data in the column will be lost.
  - You are about to drop the column `fourth_answer` on the `quiz` table. All the data in the column will be lost.
  - You are about to drop the column `second_answer` on the `quiz` table. All the data in the column will be lost.
  - You are about to drop the column `third_answer` on the `quiz` table. All the data in the column will be lost.
  - Made the column `question` on table `quiz` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `quiz` DROP COLUMN `correct_answer`,
    DROP COLUMN `first_answer`,
    DROP COLUMN `fourth_answer`,
    DROP COLUMN `second_answer`,
    DROP COLUMN `third_answer`,
    MODIFY `question` LONGTEXT NOT NULL;

-- CreateTable
CREATE TABLE `Answer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` LONGTEXT NOT NULL,
    `isCorrect` BOOLEAN NOT NULL DEFAULT false,
    `order` INTEGER NOT NULL,
    `quizId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Answer` ADD CONSTRAINT `Answer_quizId_fkey` FOREIGN KEY (`quizId`) REFERENCES `quiz`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
