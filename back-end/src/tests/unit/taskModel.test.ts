import { expect } from 'chai';
import mongoose from 'mongoose';
import * as sinon from 'sinon';
import { Types } from 'mongoose';
import TaskModel from '../../models/TaskModel';

const taskModel = new TaskModel();

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

describe('Camada Model de Task - Casos de sucesso', () => {
  before(async () => {
    sinon.stub(mongoose, 'connect');
  });

  after(() => {
    (mongoose.connect as sinon.SinonStub).restore();
  });

  describe('Método getAll de task', async () => {
    before(async () => {
      sinon.stub(mongoose.Model, 'find').resolves(taskSuccess);
    });

    after(() => {
      (mongoose.Model.find as sinon.SinonStub).restore();
    });

    it('Retorna todas as tasks cadastradas', async () => {
      const tasks = await taskModel.getAll();
      expect(tasks).to.be.have.an('array');
      expect(tasks).to.be.have.length(3);
    });

    it('Retorna um array de objetos com as propriedades corretos', async () => {
      const tasks = await taskModel.getAll();
      expect(tasks[0]).to.be.have.a('object');
      expect(tasks[0]).to.be.have.a.property('_id');
      expect(tasks[0]).to.be.have.a.property('task');
      expect(tasks[0]).to.be.have.a.property('createdAt');
      expect(tasks[0]).to.be.have.a.property('status');
    });
  });

  describe('Método create de task - Casos de sucesso', () => {
    const payload = {
      task: 'Estutar TDD todas as quartas durante 1:30h',
    };

    before(async () => {
      sinon.stub(mongoose.Model, 'create').resolves(taskSuccess[2]);
    });

    after(() => {
      (mongoose.Model.create as sinon.SinonStub).restore();
    });

    it('Retorna um objeto com a task cadastrada', async () => {
      const newTask = await taskModel.create(payload);
      expect(newTask).to.be.have.a('object');
      expect(newTask.task).to.be.have.equal(payload.task);
    });

    it('Retorna um objeto com as propriedades corretas', async () => {
      const newTask = await taskModel.create(payload);
      expect(newTask).to.be.have.a.property('_id');
      expect(newTask).to.be.have.a.property('task');
      expect(newTask).to.be.have.a.property('createdAt');
      expect(newTask).to.be.have.a.property('status');
    });
  });

  describe('Método update de task - Casos de sucesso', () => {
    const taskUpdate = {
      ...taskSuccess[0],
      task: 'Assistir aula ao vivo às 16h',
      status: 'Pronto',
    };
    const id = taskSuccess[0]._id.toString();
    const payload = {
      task: 'Assistir aula ao vivo às 16h',
      status: 'Pronto'
    };
    before(async () => {
      sinon.stub(mongoose.Model, 'findOneAndUpdate').resolves(taskUpdate);
    });

    after(() => {
      (mongoose.Model.findOneAndUpdate as sinon.SinonStub).restore();
    });

    it('Retorna um objeto com as propriedades atualizadas', async () => {
      const updateTask = await taskModel.update(id, payload);
      expect(updateTask).to.be.have.a('object');
      expect(updateTask?.status).to.be.equal('Pronto');
      expect(updateTask?.task).to.be.equal('Assistir aula ao vivo às 16h');
    });

    it('Retorna um objeto com as propriedades corretas', async () => {
      const updateTask = await taskModel.update(id, payload);
      expect(updateTask).to.be.have.a.property('_id');
      expect(updateTask).to.be.have.a.property('task');
      expect(updateTask).to.be.have.a.property('createdAt');
      expect(updateTask).to.be.have.a.property('status');
    });
  });
});