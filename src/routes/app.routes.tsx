import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/App/Home'
import { DefaultLayout } from '../layouts/App/DefaultLayout'
import { Products } from '../pages/App/Products'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  )
}
