export const MESSAGES_API = {
  SUCCESS: {
    FILES_POST: 'El archivo se cargó correctamente',
  },
  ERROR: {
    FILES: {
      REQUIRED: 'El archivo es requerido',
      TYPE: 'El archivo debe ser de tipo CSV',
      ERROR: 'Error al cargar el archivo',
    },
    USERS: {
      Q_REQUIRED: 'El parámetro "q" es requerido',
      TYPE: 'El parámetro "q" debe ser de tipo string',
      ERROR: 'Error al obtener los usuarios',
    }
  }
} as const
