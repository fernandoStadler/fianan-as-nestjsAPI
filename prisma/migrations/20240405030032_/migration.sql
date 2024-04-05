-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "renda" DOUBLE PRECISION NOT NULL,
    "dataCriacao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizacao" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "Divida" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "dataVencimento" TIMESTAMP(3) NOT NULL,
    "statusVencimento" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizacao" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Divida_id_key" ON "Divida"("id");

-- AddForeignKey
ALTER TABLE "Divida" ADD CONSTRAINT "Divida_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
