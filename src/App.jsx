import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider"
import AppLayout from './layouts/AppLayout'
import LandingPage from './pages/LandingPage'
import './App.css'
import Onbording from './pages/Onbording'
import JobListing from './pages/JobListing'
import Jobpage from './pages/Jobpage'
import PostJob from './pages/PostJob'
import Savedjob from './pages/Savedjob'
import Myjobs from './pages/Myjobs'

const router  = createBrowserRouter([
  {
    element:<AppLayout/>,
    children : [
      {
        path : '/',
        element : <LandingPage/>
      },
      {
        path : '/Onbording',
        element : <Onbording/>
      },
      {
        path : '/jobs',
        element : <JobListing/>
      },
      {
        path : '/job/:id',
        element : <Jobpage/>
      },
      {
        path : '/post-job',
        element : <PostJob/>
      },
      {
        path : '/saved-job',
        element : <Savedjob/>
      },
      {
        path : '/my-jobs',
        element : <Myjobs/>
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
