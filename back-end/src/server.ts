import TaskController from './controllers/TaskController';
import { Task } from './interfaces/TaskInterface';
import CustomRouter from './routes/Router';
import App from './app';

const server = new App();

const taskController = new TaskController();

const taskRouter = new CustomRouter<Task>();
taskRouter.addRoute(taskController);

server.addRouter(taskRouter.router);

server.startServer();
