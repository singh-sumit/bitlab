import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import themeConf from './themeConf.ts'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '@pages/Home/Home.tsx'
import ErrorPage from '@pages/Error/Error.tsx'
import { Login } from '@pages/Login/Login.tsx'
import { Register } from '@pages/Register/Register.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={themeConf}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>,
)
