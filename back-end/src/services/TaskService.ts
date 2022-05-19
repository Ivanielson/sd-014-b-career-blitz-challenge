import { Task, TaskSchema } from '../interfaces/TaskInterface';
import Service, { ServiceError } from '.';
import TaskModel from '../models/TaskModel';

class TaskService extends Service<Task> {
  constructor(model = new TaskModel()) {
    super(model);
  }

  create = async (obj: Task): Promise<Task | ServiceError | null> => {
    const valid = TaskSchema.safeParse(obj);
    if (!valid.success) {
      return { error: valid.error };
    }
    return this.model.create(obj);
  };

  update = async (_id: string, obj: Task): Promise<Task | ServiceError | null> => {
    const valid = TaskSchema.safeParse(obj);
    if (!valid.success) {
      return { error: valid.error };
    }
    return this.model.update(_id, obj);
  };
}

export default TaskService;
