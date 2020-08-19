import AppError from '@shared/errors/AppError';
import { uuid } from 'uuidv4';
import UpdateCategoryService from '../services/UpdateCategory.service';
import FakeCategoryRepository from '../repositories/fakes/FakeCategoryRepository';
import IUpdateCategoryDTO from '../dtos/IUpdateCategoryDTO';

describe('update category context', () => {
  let updateCategoryService: UpdateCategoryService;
  let fakeCategoryRepository: FakeCategoryRepository;

  beforeEach(() => {
    fakeCategoryRepository = new FakeCategoryRepository();
    updateCategoryService = new UpdateCategoryService(fakeCategoryRepository);
  });

  it('should be able to update a category', async () => {
    const category_created = await fakeCategoryRepository.create({
      image: 'fake-image-category',
      name: 'fake-name-category',
    });

    category_created.name = 'fake-name-category-updated';

    const category_updated = await updateCategoryService.execute(
      category_created,
    );

    expect(category_updated.id).toBe(category_created.id);
    expect(category_updated.name).toBe('fake-name-category-updated');
  });

  it('should not be able to update a non existing', async () => {
    const fake_category: IUpdateCategoryDTO = {
      id: uuid(),
      name: 'fake-name-category',
      image: 'fake-image-category',
    };

    await expect(
      updateCategoryService.execute(fake_category),
    ).rejects.toBeInstanceOf(AppError);
  });
});
