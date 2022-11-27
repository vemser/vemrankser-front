import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Login } from './pages/Login/Login';
import { Teste } from './pages/Teste'

export const Router = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/teste'} element={<Teste />} />
      </Routes>
    </BrowserRouter>
  )
}
