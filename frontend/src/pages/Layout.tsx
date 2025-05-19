import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'

export default function Layout() {
  return (
    <div className="flex flex-col dvh-screen">
      <Navbar />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}