/*
  Warnings:

  - The primary key for the `Views` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Views` table. All the data in the column will be lost.
  - You are about to alter the column `slug` on the `Views` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(128)`.

*/
-- AlterTable
ALTER TABLE `Views` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `slug` VARCHAR(128) NOT NULL,
    MODIFY `count` BIGINT NOT NULL DEFAULT 1,
    ADD PRIMARY KEY (`slug`);
