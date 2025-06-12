import sinon from 'sinon';
import request from 'supertest';
import { expect } from 'chai';
import * as db from './db';
import { app } from './server';

describe('GET /users/:username', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('sends the correct response when a user with the username is found', async () => {
    const fakeData = {
      id: '123',
      username: 'abc',
      email: 'abc@gmail.com',
    };

    const stub = sinon.stub(db, 'getUserByUsername').resolves(fakeData);

    const response = await request(app).get('/users/abc');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(fakeData);
  });

  it('sends the correct response when there is an error', async () => {
    const fakeError = { message: 'Something went wrong!' };

    const stub = sinon.stub(db, 'getUserByUsername').throws(fakeError);

    const response = await request(app).get('/users/abc');

    expect(response.status).to.equal(500);
    expect(response.body).to.deep.equal(fakeError);
  });

  it('returns the appropriate response when the user is not found', async () => {
    const stub = sinon.stub(db, 'getUserByUsername').resolves(null);

    const response = await request(app).get('/users/def');
    expect(response.status).to.equal(404);
  });
});
