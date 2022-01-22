/*
  Warnings:

  - You are about to drop the `Views` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Views`;

-- CreateTable
CREATE TABLE `views` (
    `slug` VARCHAR(128) NOT NULL,
    `count` BIGINT NOT NULL DEFAULT 1,

    PRIMARY KEY (`slug`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
