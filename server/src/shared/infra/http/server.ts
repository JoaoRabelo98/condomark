import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import '@shared/infra/typeorm';

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log('server started, happing hacking :D');
});
