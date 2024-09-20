import React from 'react';
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Homepg from './components/Homepg/Homepg';


const root=ReactDOM.createRoot(document.getElementById("root"));


const Index = () => {

  return (
    <>
    <Header/>
    <Homepg/>
    
    
    </>
    

  );
}


root.render(<Index/>)