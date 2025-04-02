import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export default async function clearDb() {
    await prismaClient.$transaction([
        prismaClient.request.deleteMany()
    ])
}