import { expect } from 'chai';
import * as sinon from 'sinon';
import { Types } from 'mongoose';
import TaskModel from '../../models/TaskModel';
import TaskService from '../../services/TaskService';
import { ZodError } from 'zod';
import { TaskSchema } from '../../interfaces/TaskInterface';

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

  describe('Método create de task - Caso de erro', () => {
    before(() => {
      sinon.stub(TaskSchema, 'safeParse').resolves(new ZodError([]));
    });

    after(() => {
      (TaskSchema.safeParse as sinon.SinonStub).restore();
    });

    describe('Se o método create não receber os dados corretos da requisição', () => {
      it('Retorna um objeto com a propriedade "error"', async () => {
        const newTask = await taskService.create({} as any);
        expect(newTask).to.be.have.a('object');
        expect(newTask).to.be.have.a.property('error');
      });
    });
  });

  describe('Método create de task - Casos de sucesso', () => {
    const taskObj = {
      _id: new Types.ObjectId(),
      task: 'Momento inicial às 14h',
      createdAt: new Date(),
      status: 'Pendente',
    };

    before(async () => {
      sinon.stub(taskModel, 'create').resolves(taskObj);
    });

    after(() => {
      (taskModel.create as sinon.SinonStub).restore();
    });

    describe('Se o método create receber os dados corretos da requisição', () => {
      it('Retorna um objeto com a task cadastrada', async () => {
        const payload = { task: 'Momento inicial às 14h'};
        const newTask = await taskService.create(payload);
        expect(newTask).to.be.have.a('object');
        expect(newTask).to.be.deep.equal(taskObj);
      });

      it('Retorna um objeto com as propriedades corretas', async () => {
        const payload = { task: 'Momento inicial às 14h'};
        const newTask = await taskService.create(payload);
        expect(newTask).to.be.have.a.property('_id');
        expect(newTask).to.be.have.a.property('task');
        expect(newTask).to.be.have.a.property('createdAt');
        expect(newTask).to.be.have.a.property('status');
      });
    });
  });

  describe('Método update de task - Caso de erro', () => {
    const id = taskSuccess[0]._id.toString();
    before(() => {
      sinon.stub(TaskSchema, 'safeParse').resolves(new ZodError([]));
    });

    after(() => {
      (TaskSchema.safeParse as sinon.SinonStub).restore();
    });

    describe('Se o método update não receber os dados corretos da requisição', () => {
      it('Retorna um objeto com a propriedade "error"', async () => {
        const taskUpdate = await taskService.update(id, {} as any);
        expect(taskUpdate).to.be.have.a('object');
        expect(taskUpdate).to.be.have.a.property('error');
      });
    });
  });

  describe('Método update de task - Caso de sucesso', () => {
    const taskUpdate = {
      ...taskSuccess[1],
      task: 'Estudar redux nas seguntas e terças durante 1:30h',
      status: 'Em andamento',
    };

    const id = taskSuccess[1]._id.toString();

    const payload = {
      task: 'Estudar redux nas seguntas e terças durante 1:30h',
      status: 'Em andamento',
    };

    before(async () => {
      sinon.stub(taskModel, 'update').resolves(taskUpdate);
    });

    after(() => {
      (taskModel.update as sinon.SinonStub).restore();
    });
    describe('Se o método update receber os dados corretos da requisição', () => {
      it('Retorna um objeto com a task atualizada', async () => {
        const updateTask = await taskService.update(id, payload);
        expect(updateTask).to.be.have.a('object');
        expect(updateTask).to.be.not.deep.equal(taskSuccess[1]);
      });

      it('Retorna um objeto com as propriedades corretas', async () => {
        const updateTask = await taskService.update(id, payload);
        expect(updateTask).to.be.have.a.property('_id');
        expect(updateTask).to.be.have.a.property('task');
        expect(updateTask).to.be.have.a.property('createdAt');
        expect(updateTask).to.be.have.a.property('status');
      });
    });
  });
});