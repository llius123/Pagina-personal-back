import { PrismaClient } from '@prisma/client';
export const Prisma = () => {
  const prisma = new PrismaClient({
    log: [{ emit: 'event', level: 'query' }],
  });
  return prisma;
};
