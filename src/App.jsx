import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home.jsx'
import LoginPage from './pages/login.jsx'
import AdminPage from './pages/admin.jsx'
import { Toaster } from 'react-hot-toast'
// import Test from './components/test.jsx'

export default function App() {
  return (
    <div className="w-full h-screen">
        <Toaster position='top-right'/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/admin/*" element={<AdminPage/>}/>
            {/* <Route path="/" element={<Test/>}/> */}
        </Routes>
    </div>
  )
}
