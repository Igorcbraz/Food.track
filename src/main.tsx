import React from 'react'
import ReactDOM from 'react-dom/client'

import { startWorker } from './api/_mocks'
import { App } from './app'

startWorker().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
