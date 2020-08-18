import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import ICreateCategoryDTO from '@modules/categories/dtos/ICreateCategoryDTO';
import { Repository, getRepository } from 'typeorm';
import Category from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {
  private categoriesRepository: Repository<Category>;

  constructor() {
    this.categoriesRepository = getRepository(Category);
  }

  public async findByName(name: string): Promise<Category | undefined> {
    const category_finded = await this.categoriesRepository.findOne({ name });

    return category_finded;
  }

  public async create(
    category_to_create: ICreateCategoryDTO,
  ): Promise<Category> {
    const category = this.categoriesRepository.create(category_to_create);

    await this.categoriesRepository.save(category);

    return category;
  }

  public async update(category_to_update: Category): Promise<Category> {
    await this.categoriesRepository.save(category_to_update);

    return category_to_update;
  }
}

export default CategoriesRepository;
