/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `contacts` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `token` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `contacts` DROP FOREIGN KEY `contacts_username_fkey`;

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `token` VARCHAR(100) NOT NULL,
    ADD PRIMARY KEY (`username`);

-- DropTable
DROP TABLE `contacts`;
