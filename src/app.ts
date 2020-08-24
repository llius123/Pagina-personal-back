import { ExpressServer } from './Utils/express.server';
import { EnvConstants } from './Utils/env.constants';
import { User } from './User/User';

import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import { Models } from './models/Models';
import { Sequalize } from './Utils/sequalize';
import { Project } from './Project/Project';
import { Todo } from './Todo/Todo';

const sequalize = new Sequalize();

const model = new Models(sequalize.sequalize());
const UserSequalize = model.user();
const ProjectSequalize = model.project();
const TodoSequalize = model.todo();

const envConstants = new EnvConstants();
// const prisma = new Prisma();
const app = express();
// const prismaClient = prisma.prisma();
var cors = require('cors');

const expressServer = new ExpressServer(
  app,
  jwt,
  bodyParser,
  cookieParser,
  envConstants,
  cors
);
// const rutasProtegidas = expressServer.rutasProtegidas;

// Users
const user = new User(
  expressServer.createApp(),
  UserSequalize,
  envConstants,
  jwt
);
user.login();

// Projects
const projects = new Project(expressServer.createApp(), ProjectSequalize);
projects.getProjectsById();
projects.createProjects();
projects.editProjects();
projects.deleteProjects();

// Todo
const todo = new Todo(expressServer.createApp(), TodoSequalize);
todo.getTodoById();
todo.createTodo();
todo.editTodo();
todo.deleteTodo();

expressServer.createApp().listen(envConstants.PORT, async () => {
  try {
    await sequalize.sequalize().authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Server ready at http://localhost:${envConstants.PORT}/api`);
  const table = [];
  app._router.stack.forEach((element) => {
    if (element['route'] != undefined) {
      table.push({
        route: element['route']['path'],
        method: element['route']['stack'][0]['method'],
      });
    }
  });
  console.table(table);
});
