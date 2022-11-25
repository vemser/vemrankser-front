import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export const Router = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path={'/'} element={''} />
      </Routes>
    </BrowserRouter>
  )
}
