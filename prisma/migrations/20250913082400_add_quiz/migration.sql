-- CreateTable
CREATE TABLE `quiz` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question` LONGTEXT NULL,
    `first_answer` LONGTEXT NULL,
    `second_answer` LONGTEXT NULL,
    `third_answer` LONGTEXT NULL,
    `fourth_answer` LONGTEXT NULL,
    `correct_answer` LONGTEXT NULL,
    `courseSlug` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `quiz` ADD CONSTRAINT `quiz_courseSlug_fkey` FOREIGN KEY (`courseSlug`) REFERENCES `Course`(`slug`) ON DELETE RESTRICT ON UPDATE CASCADE;
