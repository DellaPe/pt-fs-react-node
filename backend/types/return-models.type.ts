export type ReturnModelSuccess = { success: boolean }

export type ReturnModelSuccessAndData<T> = { success: true, data: T } | { success: false }
