import { RequestHandler } from 'msw'
import { setupWorker } from 'msw/browser'

import { env } from '@/env'

interface MockModule {
  [key: string]: RequestHandler
}

// Import all mocks with the pattern ./*.mock.ts
function importAllMocks() {
  const context = import.meta.glob<MockModule>('./*.mock.ts', { eager: true })

  const mocksHandlers = Object.values(context).flatMap((module) => {
    return Object.values(module) as RequestHandler[]
  })

  return mocksHandlers
}

const mocks = importAllMocks()
export const worker = setupWorker(...mocks)

export async function startWorker() {
  if (env.MODE !== 'test') return

  await worker.start()
}
