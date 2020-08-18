import { injectable, inject } from 'tsyringe';
import ICategoriesRepository from '../repositories/ICategoriesRepository';
import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';
import Category from '../infra/typeorm/entities/Category';

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private aregoriesRepository: ICategoriesRepository,
  ) {}

  public async execute(data: ICreateCategoryDTO): Promise<Category> {}
}

export default CreateCategoryService;
