import { Model as M, Document } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) {}

  create = async (obj: T): Promise<T> => this.model.create({ ...obj });

  getAll = async (): Promise<T[]> => this.model.find();

  update = async (id: string,obj: T): Promise<T | null> => (
    this.model.findOneAndUpdate({ _id: id }, { ...obj })
  );

  deleteById = async (id: string): Promise<T | null> => (
    this.model.findOneAndDelete({ _id: id })
  );
}

export default MongoModel;
