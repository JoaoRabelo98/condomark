import Category from '../infra/typeorm/entities/Category';
import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateCategoryDTO): Promise<Category>;
  update(data: Category): Promise<Category | undefined>;
}
