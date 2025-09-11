-- CreateTable
CREATE TABLE `LessonProgress` (
    `userId` INTEGER NOT NULL,
    `lessonSlug` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`, `lessonSlug`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LessonProgress` ADD CONSTRAINT `LessonProgress_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LessonProgress` ADD CONSTRAINT `LessonProgress_lessonSlug_fkey` FOREIGN KEY (`lessonSlug`) REFERENCES `Lesson`(`slug`) ON DELETE RESTRICT ON UPDATE CASCADE;
