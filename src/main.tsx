import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Accueil from './pages/Accueil.tsx'
import Offres from './pages/Offres.tsx'
import Blog from './pages/Blog.tsx'
import Contact from './pages/Contact.tsx'
import NotFound from './pages/NotFound.tsx'


const routes = createBrowserRouter([
  {
    path:'/',
    element:<Accueil />,
    errorElement:<NotFound />
  },
  {
    path:'/offres',
    element:<Offres />
  },
  {
    path:'/blog',
    element:<Blog />
  },
  {
    path:'/contact',
    element:<Contact />
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
