/*
  Warnings:

  - A unique constraint covering the columns `[name,ownerId]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "Organization_name_ownerId_key" ON "Organization"("name", "ownerId");
