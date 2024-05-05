import test from 'node:test'
import assert from 'node:assert'
import { ApiModel } from './api/api.model'
import { User } from './api/api.entities'

test('Cargar usuarios', async () => {
  const data: User[] = [{
    id: 1,
    username: 'user1',
    email: 'user1@example.com',
    role: 'admin',
    age: 30,
    city: 'New York'
  }]
  const expected = { success: true, data}
  const response = await ApiModel.postFiles(data)
  console.log(response)
  assert.deepStrictEqual(response, expected)
})