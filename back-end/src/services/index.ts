import { ZodError } from 'zod';
import { Model } from '../interfaces/ModelInterface';

export interface ServiceError {
  error: ZodError;
}

abstract class Service<T> {
  constructor(protected model: Model<T>) {}

  public async create(obj: T): Promise<T | null | ServiceError> {
    return this.model.create(obj);
  }

  public async getAll(): Promise<T[]> {
    return this.model.getAll();
  }

  public async update(_id: string, obj: T): Promise<T | null | ServiceError> {
    return this.model.update(_id, obj);
  }

  public async deleteById(_id: string): Promise<T | null> {
    return this.model.deleteById(_id);
  }
}

export default Service;
