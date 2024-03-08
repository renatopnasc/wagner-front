import { Routes, Route } from 'react-router-dom'
import { SignIn } from '../pages/Auth/SignIn'
import { SignUp } from '../pages/Auth/SignUp'
import { DefaultLayout } from '../layouts/Auth/DefaultLayout'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Route>
    </Routes>
  )
}
