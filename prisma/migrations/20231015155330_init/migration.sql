/*
  Warnings:

  - Added the required column `public_id` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "public_id" TEXT NOT NULL;
