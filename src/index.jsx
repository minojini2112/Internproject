import React from 'react';
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Homepg from './components/Homepg/Homepg';
import Agencies from './components/Agencies/Agencies';
import Brands from './components/Brands/Brands';
import Pricing from './components/Pricing/Pricing';
//import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';




const root=ReactDOM.createRoot(document.getElementById("root"));


const Index=() => {

  return (
    <>
    <Header/>
    <Homepg/>

    </>
    

  );
}
/*const Router=createBrowserRouter([
  {
    path:'/',
    element:<Index/>,
    children:[
      {
        element:<Homepg/>,
        path:"/Home",
      },
      {
        element:<Brands/>,
        path:"/Brand",
      },
      {
         element:<Agencies/>,
         path:"/Agencies",
      },
      {
        element:<Pricing/>,
         path:"/Pricing",
      },

    ]
  }
])

root.render(<RouterProvider router={Router}/>)*/
root.render(<Index/>)