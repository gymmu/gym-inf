-- AlterTable: Add class_id to users
ALTER TABLE "users" ADD COLUMN "class_id" INTEGER;

-- CreateTable: chapter_progress
CREATE TABLE "chapter_progress" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "chapter_slug" VARCHAR(200) NOT NULL,
    "understanding_level" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chapter_progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable: classes
CREATE TABLE "classes" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable: chapter_filters
CREATE TABLE "chapter_filters" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "chapters" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chapter_filters_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "users_class_id_idx" ON "users"("class_id");

-- CreateIndex
CREATE INDEX "chapter_progress_user_id_idx" ON "chapter_progress"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "chapter_progress_user_id_chapter_slug_key" ON "chapter_progress"("user_id", "chapter_slug");

-- CreateIndex
CREATE UNIQUE INDEX "classes_name_key" ON "classes"("name");

-- CreateIndex
CREATE INDEX "chapter_filters_user_id_idx" ON "chapter_filters"("user_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chapter_progress" ADD CONSTRAINT "chapter_progress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chapter_filters" ADD CONSTRAINT "chapter_filters_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
