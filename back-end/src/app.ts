import express, { Router } from 'express';
import cors from 'cors';
import connectToDatabase from './models/connection';

class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());
  }

  public startServer(port = 3001) {
    connectToDatabase();
    const PORT = process.env.PORT || port;
    return this.app.listen(PORT, () => {
      console.log(`Ouvindo na porta ${PORT}`);
    });
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }
}

export default App;
