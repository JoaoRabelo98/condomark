import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import ICategoriesRepository from '../repositories/ICategoriesRepository';
import Category from '../infra/typeorm/entities/Category';
import IUpdateCategoryDTO from '../dtos/IUpdateCategoryDTO';

@injectable()
class UpdateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private caregoriesRepository: ICategoriesRepository,
  ) {}

  public async execute(data: IUpdateCategoryDTO): Promise<Category> {
    const category_exists = await this.caregoriesRepository.findByName(
      data.name,
    );

    if (!category_exists) {
      throw new AppError('Category selected is non existing');
    }

    const category_to_update = Object.assign(category_exists, data);

    const category_updated = await this.caregoriesRepository.update(
      category_to_update,
    );

    return category_updated;
  }
}

export default UpdateCategoryService;
