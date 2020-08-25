import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success ', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Joao',
        email: 'joao.rsousa23@gmail.com',
        password: '1234567',
        passwordConfirmation: '1234567'
      })
      .expect(200)
  })
})
