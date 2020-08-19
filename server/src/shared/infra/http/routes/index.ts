import { Router } from 'express';
import CategoryRouter from '@modules/categories/infra/http/routes/categories.routes';

const routes = Router();

routes.use('/category', CategoryRouter);

export default routes;
