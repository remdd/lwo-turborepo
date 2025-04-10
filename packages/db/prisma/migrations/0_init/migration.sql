-- CreateEnum
CREATE TYPE "status" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED');

-- CreateTable
CREATE TABLE "bookings" (
    "ticket_code" VARCHAR(32) NOT NULL,
    "booking_id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "date" DATE NOT NULL,
    "status" CHAR(10),
    "allocation" INTEGER,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("booking_id")
);

-- CreateTable
CREATE TABLE "test" (
    "test_id" SERIAL NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "test_pkey" PRIMARY KEY ("test_id")
);

