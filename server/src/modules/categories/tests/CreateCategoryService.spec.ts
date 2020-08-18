import CreateCategoryService from '../services/CreateCategory.service';
import FakeCategoryRepository from '../repositories/fakes/FakeCategoryRepository';
import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';

describe('hello world context', () => {
  let createCategoryService: CreateCategoryService;
  let fakeCategoryRepository: FakeCategoryRepository;

  beforeEach(() => {
    fakeCategoryRepository = new FakeCategoryRepository();
    createCategoryService = new CreateCategoryService(fakeCategoryRepository);
  });

  it('should be able to create a category', async () => {
    const category: ICreateCategoryDTO = {
      image: 'fake-image-of-category',
      name: 'fake-name-of-category',
    };

    const category_created = await createCategoryService.execute(category);

    expect(category_created).toHaveProperty('id');
  });
});
