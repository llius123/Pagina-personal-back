import { ExpressServer } from './Utils/express.server';
import { EnvConstants } from './Utils/env.constants';
import { User } from './User/User';
import { Prisma } from './Utils/prisma';

import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const envConstants = new EnvConstants();
const prisma = new Prisma();
const app = express();
const prismaClient = prisma.prisma();

const expressServer = new ExpressServer(
  app,
  jwt,
  bodyParser,
  cookieParser,
  envConstants
);

const user = new User(
  expressServer.createApp(),
  prismaClient,
  envConstants,
  jwt
);
user.login();

expressServer.createApp().listen(envConstants.PORT, async () => {
  console.log(`Server ready at http://localhost:${envConstants.PORT}/api`);
  const table = [];
  app._router.stack.forEach(element => {
    if (element['route'] != undefined) {
      table.push({
        route: element['route']['path'],
        method: element['route']['stack'][0]['method'],
      });
    }
  });
  console.table(table);
});
