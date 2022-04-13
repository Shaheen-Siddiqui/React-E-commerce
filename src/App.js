import React from 'react';
import Header from './COMPONENTS/Header';
import Home from './COMPONENTS/Home';
import {Routes,Route} from 'react-router-dom';
import Gotocart from './COMPONENTS/Gotocart';


const App = () => {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Gotocart" element={<Gotocart />} />
    </Routes>
    </>

  )
}

export default App
