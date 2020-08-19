import { Request, Response } from 'express';
import { container, injectable } from 'tsyringe';
import CreateCategoryService from '@modules/categories/services/CreateCategory.service';
import UpdateCategoryService from '@modules/categories/services/UpdateCategory.service';

@injectable()
class CategoriesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, image } = request.body;

    const createCategoryService = container.resolve(CreateCategoryService);

    const category = await createCategoryService.execute({ image, name });

    return response.json({ category });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { name, image } = request.body;

    const updateCategoryService = container.resolve(UpdateCategoryService);

    const category = await updateCategoryService.execute({ id, name, image });

    return response.json({ category });
  }
}

export default CategoriesController;
