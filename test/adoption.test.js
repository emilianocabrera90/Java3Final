import * as chai from 'chai';
import supertest from 'supertest';
import mongoose from 'mongoose';
import app from '../src/app.js';
import dotenv from 'dotenv';

dotenv.config();

const { expect } = chai;
const requester = supertest(app);

describe('Testing del router /api/adoptions', () => {
  let createdId;

  // Conectar DB antes de tests
  before(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Limpiar colección para tests repetibles
    await mongoose.connection.db.collection('adoptions').deleteMany({});
  });

  // Cerrar conexión al final
  after(async () => {
    await mongoose.connection.close();
  });

  it('GET /api/adoptions - Debe devolver status 200 y un array', async () => {
    const res = await requester.get('/api/adoptions');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('POST /api/adoptions - Debe crear una adopción', async () => {
    const newAdoption = {
      petName: 'Firulais',
      species: 'perro',
      age: 3,
      adopterName: 'Juan Perez'
    };
    const res = await requester.post('/api/adoptions').send(newAdoption);
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('_id');
    expect(res.body.petName).to.equal('Firulais');
    createdId = res.body._id;
  });

  it('GET /api/adoptions/:id - Debe devolver adopción por ID', async () => {
    const res = await requester.get(`/api/adoptions/${createdId}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('_id', createdId);
  });

  it('GET /api/adoptions/:id - Debe devolver 404 si ID no existe', async () => {
    const res = await requester.get('/api/adoptions/000000000000000000000000');
    expect(res.status).to.equal(404);
    expect(res.body).to.have.property('message');
  });

  it('PUT /api/adoptions/:id - Debe actualizar adopción', async () => {
    const updatedData = { adopterName: 'Maria Gomez' };
    const res = await requester.put(`/api/adoptions/${createdId}`).send(updatedData);
    expect(res.status).to.equal(200);
    expect(res.body.adopterName).to.equal('Maria Gomez');
  });

  it('DELETE /api/adoptions/:id - Debe eliminar adopción', async () => {
    const res = await requester.delete(`/api/adoptions/${createdId}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('message');
  });

  it('DELETE /api/adoptions/:id - Debe devolver 404 si adopción ya no existe', async () => {
    const res = await requester.delete(`/api/adoptions/${createdId}`);
    expect(res.status).to.equal(404);
    expect(res.body).to.have.property('message');
  });
});


