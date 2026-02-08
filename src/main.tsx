import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ToastContainer } from 'react-toastify'
import App from './App.tsx'
import './index.css'
import Login from './pages/Login.tsx'
import SignUp from './pages/SignUp.tsx'
import GuestRoute from './routes/GuestRoute.tsx'
import PrivateRoute from './routes/PrivateRoute.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer position="top-center" theme="dark" />
    <div className="bg-black min-h-screen text-white/90">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<GuestRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<App />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  </StrictMode>,
)
