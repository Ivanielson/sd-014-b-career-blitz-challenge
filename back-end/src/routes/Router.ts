import { Router } from 'express';
import Controller from '../controllers';

class CustomRouter<T> {
  router: Router;

  constructor() {
    this.router = Router();
  }

  addRoute(controller: Controller<T>, route: string = controller.route) {
    this.router.get(route, controller.getAll);
    this.router.post(route, controller.create);
  }
}

export default CustomRouter;
