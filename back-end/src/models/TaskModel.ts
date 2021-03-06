import { Schema, model as createModel, Document } from 'mongoose';
import { Task } from '../interfaces/TaskInterface';
import MongoModel from './MongoModel';

interface TaskDocument extends Task, Document {}

const taskSchema = new Schema<TaskDocument>({
  task: String,
  status: {
    type: String,
    default: 'Pendente'
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
},  { versionKey: false });

class TaskModel extends MongoModel<Task> {
  constructor(model = createModel('Tasks', taskSchema)) {
    super(model);
  }
}

export default TaskModel;

// Ref: https://mongoosejs.com/docs/defaults.html