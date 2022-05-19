import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import TaskService from '../services/TaskService';
import { Task } from '../interfaces/TaskInterface';
import { StatusCodes } from 'http-status-codes';

class TaskController extends Controller<Task> {
  private _route: string;

  constructor(
    service = new TaskService(),
    route = '/tasks',
  ) {
    super(service);
    this._route = route;
  }

  get route() {
    return this._route;
  }

  create = async (
    req: RequestWithBody<Task>,
    res: Response<Task | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const newTask = await this.service.create(body);
      if (!newTask) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          error: this.errors.internal,
        });
      }
      if ('error' in newTask) {
        return res.status(StatusCodes.BAD_REQUEST).json(newTask);
      }
      return res.status(StatusCodes.CREATED).json(newTask);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: this.errors.internal,
      });
    }
  };

  update = async (
    req: RequestWithBody<Task>,
    res: Response<Task | ResponseError>,
  ): Promise<typeof res> => {
    const { params: { id }, body } = req;
    try {
      const updateTask = await this.service.update(id, body);
      if (!updateTask) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: this.errors.notFound });
      }
      if ('error' in updateTask) {
        return res.status(StatusCodes.BAD_REQUEST).json(updateTask);
      }
      return res.status(StatusCodes.CREATED).json(updateTask);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: this.errors.internal,
      });
    }
  };

  deleteById = async (
    req: Request<{ id: string; }>,
    res: Response<Task | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const deleteTask = await this.service.deleteById(id);
      return deleteTask
      ? res.status(StatusCodes.NO_CONTENT).end()
      : res.status(StatusCodes.NOT_FOUND).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: this.errors.internal,
      });
    }
  };
}

export default TaskController;
