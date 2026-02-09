import { BrowserRouter, Route, Routes } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import SignUp from './pages/SignUp'
import Users from './pages/Users'
import GuestRoute from './routes/GuestRoute'
import PrivateRoute from './routes/PrivateRoute'

const App = () => {
  return (
    <>
      <ToastContainer position="top-center" theme="dark" />
      <div className="bg-black min-h-screen text-white/90">
        <BrowserRouter>
          <Routes>
            <Route element={<GuestRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
              </Route>
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
