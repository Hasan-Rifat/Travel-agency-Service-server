/*
  Warnings:

  - Added the required column `public_id` to the `BlogPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `BlogPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BlogPost" ADD COLUMN     "public_id" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
