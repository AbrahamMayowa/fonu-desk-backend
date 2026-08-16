-- CreateTable
CREATE TABLE "TempUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "otpId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TempUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TempUser_otpId_key" ON "TempUser"("otpId");

-- CreateIndex
CREATE INDEX "TempUser_email_idx" ON "TempUser"("email");

-- AddForeignKey
ALTER TABLE "TempUser" ADD CONSTRAINT "TempUser_otpId_fkey" FOREIGN KEY ("otpId") REFERENCES "Otp"("id") ON DELETE SET NULL ON UPDATE CASCADE;
