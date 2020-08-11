import { envConstants } from './../Utils/env.constants';
import { Prisma } from '../Utils/prisma';
import { Router } from 'express';
import jwt from 'jsonwebtoken';

export const User = Router();
const prisma = Prisma();

User.post('/login', async (req, res) => {
  console.log(req.body);
  const users = await prisma.uSER.findMany({
    where: { USERNAME: req.body.user, PASSWORD: req.body.pass },
    take: 1,
  });
  if (users) {
    var token = jwt.sign(users[0], envConstants.JWT, { expiresIn: '30d' });
    res.send(token);
  } else {
    res.send({ msg: 'Error' });
  }
});
