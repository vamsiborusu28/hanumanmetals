import Home from "./Components/HomePage/Home"
import Footer from "./Components/Footer/Footer"
import About from "./Components/About/About"
import Header from "./Components/HeaderNav/Header"
import Contact from "./Components/Contact/Contact"
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom"

const routes =createBrowserRouter([

  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ]
  }
])

function AppLayout() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
    
 
  )
}


function App(){
  return(
    <RouterProvider router={routes}/>
  )
}
export default App
