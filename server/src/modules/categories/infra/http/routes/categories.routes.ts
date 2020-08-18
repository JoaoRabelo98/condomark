import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

const categories_router = Router();

categories_router.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().email().required(),
      image: Joi.string().required(),
    },
  }),
);
