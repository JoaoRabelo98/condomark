import { injectable, inject } from 'tsyringe';
import ICategoriesRepository from '../repositories/ICategoriesRepository';
import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';
import Category from '../infra/typeorm/entities/Category';

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private caregoriesRepository: ICategoriesRepository,
  ) {}

  public async execute(data: ICreateCategoryDTO): Promise<Category> {
    const category_exists = await this.caregoriesRepository.findByName(
      data.name,
    );

    if (category_exists) {
      throw new Error();
    }

    const category_created = await this.caregoriesRepository.create(data);

    return category_created;
  }
}

export default CreateCategoryService;
