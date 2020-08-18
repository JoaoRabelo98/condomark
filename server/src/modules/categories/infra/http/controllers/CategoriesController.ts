import { Request, Response } from 'express';
// import { container } from 'tsyringe';

class CategoriesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, image } = request.body;

    return response.json({ name, image });
  }
}

export default CategoriesController;
