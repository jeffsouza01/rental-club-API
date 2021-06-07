import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

class ListAvailableCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { category_id, brand, name } = request.query;

    const listAvailableCarsUseCase = container.resolve(
      ListAvailableCarsUseCase
    );

    const carsAvailable = await listAvailableCarsUseCase.execute({
      brand: brand as string,
      name: name as string,
      category_id: category_id as string,
    });

    return response.json(carsAvailable);
  }
}

export { ListAvailableCarsController };
