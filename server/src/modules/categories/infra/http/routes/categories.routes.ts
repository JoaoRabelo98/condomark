import { Router } from 'express';
import { container } from 'tsyringe';
import { celebrate, Segments, Joi } from 'celebrate';
import CategoriesController from '../controllers/CategoriesController';

const categories_router = Router();
const categoriesController = container.resolve(CategoriesController);

categories_router.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().email().required(),
      image: Joi.string().required(),
    },
  }),
  categoriesController.create,
);

categories_router.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().email().required(),
      image: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  categoriesController.update,
);

export default categories_router;
