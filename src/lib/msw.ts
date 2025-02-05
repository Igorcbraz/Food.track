import { setupWorker } from 'msw/browser'

// Declaração do namespace __WebpackModuleApi
declare global {
  namespace NodeJS {
    interface Require {
      context: (
        path: string,
        deep?: boolean,
        filter?: RegExp,
      ) => {
        keys: () => string[]
        <T>(id: string): T
      }
    }
  }
}

// Função para importar dinamicamente todos os mocks
function importAll<T>(r: __WebpackModuleApi.RequireContext): T[] {
  return r.keys().map(r)
}

// Importa todos os arquivos que terminam com '.mock.ts' na pasta atual
const mocks = importAll(require.context('../api/_mocks', false, /\.mock\.ts$/))

// Extrai os mocks exportados de cada módulo
const handlers = mocks.flatMap((mock) => Object.values(mock))

export const worker = setupWorker(...handlers)
