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

describe('Camada Model de Task - Caso de sucesso', () => {
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

    it('Retorna um array de objetos com os atributos corretos', async () => {
      const tasks = await taskModel.getAll();
      expect(tasks[0]).to.be.have.a('object');
      expect(tasks[0]).to.be.have.a.property('_id');
      expect(tasks[0]).to.be.have.a.property('task');
      expect(tasks[0]).to.be.have.a.property('createdAt');
      expect(tasks[0]).to.be.have.a.property('status');
    });
  });
});