export const APP_STATUS = {
  IDLE: 'IDLE', // Estado inicial
  ERROR: 'ERROR', // Error
  READY_TO_UPLOAD: 'READY_TO_UPLOAD', // Listo para subir archivo
  UPLOADING: 'UPLOADING', // Subiendo archivo
  UPLOAD: 'UPLOAD', // Archivo subido
} as const

export const BUTTON_TEXT = {
  [APP_STATUS.IDLE]: 'Seleccionar archivo',
  [APP_STATUS.ERROR]: 'Error',
  [APP_STATUS.READY_TO_UPLOAD]: 'Subir archivo',
  [APP_STATUS.UPLOADING]: 'Subiendo archivo...',
  [APP_STATUS.UPLOAD]: 'Archivo subido',
} as const