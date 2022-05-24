import { expect } from 'chai';
import * as sinon from 'sinon';
import { Types } from 'mongoose';
import TaskModel from '../../models/TaskModel';
import TaskService from '../../services/TaskService';
import { ZodError } from 'zod';

const taskModel = new TaskModel();
const taskService = new TaskService(taskModel);

describe('Camada services de task', () => {
  const taskSuccess = [
    {
      _id: new Types.ObjectId(),
      task: 'Assistir aula ao vivo às 16:20h',
      createdAt: new Date(),
      status: 'Pendente',
    },
    {
      _id: new Types.ObjectId(),
      task: 'Estudar redux nas seguntas durante 2h',
      createdAt: new Date(),
      status: 'Pendente',
    },
    {
      _id: new Types.ObjectId(),
      task: 'Estutar TDD todas as quartas durante 1:30h',
      createdAt: new Date(),
      status: 'Pendente',
    },
  ];
  describe('Método getAll de task', () => {
    before(async () => {
      sinon.stub(taskModel, 'getAll').resolves(taskSuccess);
    });

    after(() => {
      (taskModel.getAll as sinon.SinonStub).restore();
    });

    it('Retorna um array de objetos com todas as tasks cadastradas', async () => {
      const tasks = await taskService.getAll();
      expect(tasks).to.be.have.an('array');
      expect(tasks).to.be.have.lengthOf(3);
    });
    it('Retorna um objeto com as propriedades correta', async () => {
      const tasks = await taskService.getAll();
      expect(tasks[0]).to.be.have.a.property('_id');
      expect(tasks[0]).to.be.have.a.property('task');
      expect(tasks[0]).to.be.have.a.property('createdAt');
      expect(tasks[0]).to.be.have.a.property('status');
    });
  });
});