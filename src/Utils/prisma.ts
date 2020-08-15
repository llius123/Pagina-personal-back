import { PrismaClient } from '@prisma/client';

export class Prisma {
  constructor() {}
  prisma() {
    return new PrismaClient({
      log: [{ emit: 'event', level: 'query' }],
    });
  }
}
