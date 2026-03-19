import { BrowserRouter, Route, Routes } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Layout from './layouts/Layout'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import Login from './pages/Login'
import Logs from './pages/Logs'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import ResetPassword from './pages/ResetPassword'
import Rules from './pages/Rules'
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
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route
                path="/reset-password/:userId/:token"
                element={<ResetPassword />}
              />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/logs" element={<Logs />} />
                <Route path="/profile" element={<Profile />} />
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
