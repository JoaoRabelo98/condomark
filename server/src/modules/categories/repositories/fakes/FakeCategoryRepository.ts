import ICreateCategoryDTO from '@modules/categories/dtos/ICreateCategoryDTO';
import Category from '@modules/categories/infra/typeorm/entities/Category';
import ICategoryRepository from '../ICategoriesRepository';

class FakeCategoryRepository implements ICategoryRepository {
  categories: Array<Category> = [];

  public async create(
    category_to_create: ICreateCategoryDTO,
  ): Promise<Category> {
    const category = new Category();

    Object.assign(category, category_to_create);

    this.categories.push(category);

    return category;
  }

  public async update(category_to_update: Category): Promise<Category> {
    const category_index = this.categories.findIndex(
      category => category.id === category_to_update.id,
    );

    this.categories[category_index] = category_to_update;

    return category_to_update;
  }
}

export default FakeCategoryRepository;
