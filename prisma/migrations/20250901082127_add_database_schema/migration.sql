-- CreateTable
CREATE TABLE `Courses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `img` VARCHAR(191) NULL,
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
    `certificate_img` VARCHAR(191) NULL,

    UNIQUE INDEX `Courses_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reviews` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reviewer_img` VARCHAR(191) NULL,
    `rating` DOUBLE NULL,
    `name` VARCHAR(191) NOT NULL,
    `generation` VARCHAR(191) NULL,
    `course_name` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Parter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `logo_img` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Assets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `page` VARCHAR(191) NULL,
    `section` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `url` VARCHAR(191) NULL,
    `alt` VARCHAR(191) NULL,
    `entity_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SiteContents` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `page` VARCHAR(191) NULL,
    `section` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `entity_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Founder` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `founder_img` VARCHAR(191) NULL,
    `founder_quote` VARCHAR(191) NULL,
    `founder_name` VARCHAR(191) NOT NULL,
    `social_link` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FAQ` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `page` VARCHAR(191) NULL,
    `subtitle_icon` VARCHAR(191) NULL,
    `section` VARCHAR(191) NULL,
    `subtitle` VARCHAR(191) NULL,
    `question` VARCHAR(191) NOT NULL,
    `answer` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Program` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `program_icon` VARCHAR(191) NULL,
    `program_name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `certificate_type` VARCHAR(191) NULL,
    `logo` VARCHAR(191) NULL,
    `certificate_img` VARCHAR(191) NULL,
    `required_courses` VARCHAR(191) NULL,
    `duration_each_course` VARCHAR(191) NULL,
    `level` VARCHAR(191) NULL,
    `price_each_course` DOUBLE NULL,
    `how_to_get` VARCHAR(191) NULL,

    UNIQUE INDEX `Program_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SlideShows` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `img_url` VARCHAR(191) NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `button_message` VARCHAR(191) NULL,
    `route_link` VARCHAR(191) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
