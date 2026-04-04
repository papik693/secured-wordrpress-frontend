import { BrowserRouter, Route, Routes } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Layout from './layouts/Layout'
import CloudtrailEvents from './pages/CloudtrailEvents'
import ForgotPassword from './pages/ForgotPassword'
import GuarddutyFindings from './pages/GuarddutyFindings'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import ResetPassword from './pages/ResetPassword'
import SignUp from './pages/SignUp'
import Users from './pages/Users'
import WafLogs from './pages/WafLogs'
import WafRules from './pages/WafRules'
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
                <Route path="/waf-rules" element={<WafRules />} />
                <Route path="/waf-logs" element={<WafLogs />} />
                <Route
                  path="/cloudtrail-events"
                  element={<CloudtrailEvents />}
                />
                <Route
                  path="/guardduty-findings"
                  element={<GuarddutyFindings />}
                />
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
