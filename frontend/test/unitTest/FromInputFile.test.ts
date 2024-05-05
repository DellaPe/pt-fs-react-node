import { describe, expect, it,  } from 'vitest'
import { uploadFile } from '../../src/services/uploadFile'
import { MESSAGES_API } from '../constants'


describe('FromInputFile', () => {
  describe('uploadFile', () => {
    it('Archivo null', async () => {
      const extendMessage = MESSAGES_API.ERROR.FILES.REQUIRED
      const result = await uploadFile(null as unknown as File) 
      if (!result[0]?.message) throw new Error('Archivo null')
      expect(result[0].message).toEqual(extendMessage)
    }),
    it('Archivo no es de tipo CSV', async () => {
      const extendMessage = MESSAGES_API.ERROR.FILES.TYPE
      const contenido = 'Este es el contenido del archivo .txt.'
      const blob = new Blob([contenido], { type: 'text/plain' }) as File
      const result = await uploadFile(blob)
      if (!result[0]?.message) throw new Error('Archivo no es de tipo CSV')
      expect(result[0].message).toEqual(extendMessage)
    }),
    it('Archivo cargado', async () => {
      const extendMessage = [
        null,
        MESSAGES_API.SUCCESS.FILES_POST,
        [{
          id: '1',
          username: 'user1',
          email: 'user1@example.com',
          role: 'admin',
          age: '30',
          city: 'New York'
        }]

      ]
      const csvData = [
        ['id', 'username', 'email', 'role', 'age', 'city'],
        ['1', 'user1', 'user1@example.com', 'admin', '30', 'New York']
      ];
      const csvContent = csvData.map(e => e.join(',')).join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv' }) as File
      const result = await uploadFile(blob)
      expect(result).toEqual(extendMessage)
    })
  })
})