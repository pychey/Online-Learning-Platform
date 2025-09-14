-- CreateTable
CREATE TABLE `Complete` (
    `userId` INTEGER NOT NULL,
    `courseSlug` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`, `courseSlug`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Complete` ADD CONSTRAINT `Complete_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Complete` ADD CONSTRAINT `Complete_courseSlug_fkey` FOREIGN KEY (`courseSlug`) REFERENCES `Course`(`slug`) ON DELETE RESTRICT ON UPDATE CASCADE;
