import { envConstants } from './env.constants';
import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
var cookieParser = require('cookie-parser');

export const createApp = () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());

  return app;
};

export const rutasProtegidas = express.Router();
rutasProtegidas.use((req, res, next) => {
  const token = req.cookies.accesToken;

  if (token) {
    jwt.verify(token, envConstants.JWT, (err, decoded) => {
      if (err) {
        return res.json({ msg: 'Token inválida' });
      } else {
        req.body.token = decoded;
        next();
      }
    });
  } else {
    res.send({
      msg: 'Token no proveída.',
    });
  }
});
