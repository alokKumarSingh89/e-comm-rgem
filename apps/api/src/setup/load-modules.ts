import * as express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import { NODE_ENV } from '../config/env';

export default function (server: express.Application) {
  console.info('SETUP - Loading modules...');

  server.use(cors());

  server.use(express.json());

  server.use(express.urlencoded({ extended: false }));

  server.use(cookieParser());

  if (NODE_ENV != 'production') {
    server.use(morgan('tiny'));
  }
}
