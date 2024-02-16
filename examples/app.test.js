
const request = require('supertest');
const app = require('./app');

describe('Test the cat service', () => {
    test('GET /cats succeeds', () => {
        return request(app)
	    .get('/cats')
	    .expect(200);
    });

    test('GET /cats returns JSON', () => {
        return request(app)
	    .get('/cats')
	    .expect('Content-type', /json/);
    });

    test('GET /cats includes Buxton', () => {
        return request(app)
	    .get('/cats')
	    .expect(/Buxton/);
    });

    test('GET /thing/1 succeeds', () => {
        return request(app)
	    .get('/thing/1')
	    .expect(200);
    });

    test('GET /thing/1 returns JSON', () => {
        return request(app)
	    .get('/thing/1')
	    .expect('Content-type', /json/);
    });

    test('GET /thing/1 includes 40', () => {
        return request(app)
	    .get('/thing/1')
	    .expect(/40/);
    });

    test('POST /thing/add succeeds', () => {
        const params = {'newthing': 'TechUp'};
        return request(app)
        .post('/thing/add')
        .send(params)
	    .expect(200);
    });
});