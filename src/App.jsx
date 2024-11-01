import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from "./components/protected-route";
import { ThemeProvider } from "@/components/theme-provider"
import AppLayout from './layouts/AppLayout'
import LandingPage from './pages/LandingPage'
import Onboarding from './pages/Onboarding'
import JobListing from './pages/JobListing'
import Jobpage from './pages/Jobpage'
import PostJob from './pages/PostJob'
import Savedjob from './pages/Savedjob'
import Myjobs from './pages/Myjobs'
import './App.css'

const router  = createBrowserRouter([
  {
    element:<AppLayout/>,
    children : [
      {
        path : '/',
        element :  <LandingPage/> 
      },
      {
        path : '/onboarding',
        element : (
          <ProtectedRoute>
            <Onboarding/>
          </ProtectedRoute>
        )
      },
      {
        path : '/jobs',
        element :(
          <ProtectedRoute>
            <JobListing/>
          </ProtectedRoute>
        )
      },
      {
        path : '/job/:id',
        element : (
          <ProtectedRoute>
            <Jobpage/>
          </ProtectedRoute>
        )
      },
      {
        path : '/post-job',
        element :(
          <ProtectedRoute>
            <PostJob/>
          </ProtectedRoute>
        ) 
      },
      {
        path : '/saved-jobs',
        element :(
          <ProtectedRoute>
            <Savedjob/>
          </ProtectedRoute>
        )
      },
      {
        path : '/my-jobs',
        element :(
          <ProtectedRoute>
            <Myjobs/>
          </ProtectedRoute>
        )
      }
    ]
  }
])

function App() {
  

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
