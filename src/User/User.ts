import { Prisma } from '../Utils/prisma';
import { Router } from 'express';

export const User = Router();
const prisma = Prisma();

User.post('/login', async (req, res) => {
  const users = await prisma.uSER.findMany({
    where: { USERNAME: req.body.user, PASSWORD: req.body.pass },
    take: 1,
  });
  res.send(users);
});
