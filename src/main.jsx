import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// Lazy Import
const App = lazy(() => import("./App.jsx"));
// Suspense Loading
import { SuspenseCustom } from './utils/utils.jsx';
// Context Provider
import { ContextProvider } from './context/index.jsx';
// Reducer, Initial State
import { reducer, initialState } from "./context/raducer.jsx"

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <SuspenseCustom>
      <ContextProvider reducer={reducer} initialState={initialState}>
        <App />
      </ContextProvider>
    </SuspenseCustom>
  </BrowserRouter>

  // </StrictMode>,
)