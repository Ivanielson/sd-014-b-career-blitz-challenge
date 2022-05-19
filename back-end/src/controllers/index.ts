import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Service from '../services';

export type ResponseError = {
  error: unknown;
};

export interface RequestWithBody<T> extends Request {
  body: T;
}

enum ControllerErrors {
  internal = 'Internal Server Error',
  notFound = 'Object not found',
  requiredId = 'Id is required',
  badRequest = 'Bad request',
}

abstract class Controller<T> {
  abstract route: string;

  protected errors = ControllerErrors;

  constructor(protected service: Service<T>) {}

  abstract create(
    req: RequestWithBody<T>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res>;

  getAll = async (
    _req: Request,
    res: Response<T[] | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const tasks = await this.service.getAll();
      return res.status(StatusCodes.OK).json(tasks);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: this.errors.internal,
      });
    }
  };

  abstract update(
    req: Request<{ id: string; } & RequestWithBody<T>>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res>;

  abstract deleteById(
    req: Request<{ id: string }>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res>;
}

export default Controller;
