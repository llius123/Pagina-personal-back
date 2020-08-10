import { envConstants } from './env.constants';
import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

export const createApp = () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  return app;
};

export const rutasProtegidas = express.Router();
rutasProtegidas.use((req, res, next) => {
  const token = req.headers['access-token'];

  if (token) {
    jwt.verify(token, envConstants.JWT, (err, decoded) => {
      if (err) {
        return res.json({ mensaje: 'Token inválida' });
      } else {
        req.body.token = decoded;
        next();
      }
    });
  } else {
    res.send({
      mensaje: 'Token no proveída.',
    });
  }
});
