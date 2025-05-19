import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './pages/Layout'
import Home from './pages/Home'
import Dashboard from './pages/admin/Dashboard'
import ErrorPage from './pages/ErrorPage'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
