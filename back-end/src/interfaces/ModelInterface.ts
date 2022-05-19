export interface Model<T> {
  create(obj: T): Promise<T>,
  getAll(): Promise<T[]>,
  update(_id: string, obj: T): Promise<T | null>,
  deleteById(_id: string): Promise<T | null>,
}
