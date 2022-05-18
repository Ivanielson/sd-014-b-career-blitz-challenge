export interface Model<T> {
  create(obj: T): Promise<T>,
  getAll(): Promise<T[]>,
  update(id: string, obj: T): Promise<T | null>,
  deleteById(id: string): Promise<T | null>,
}
