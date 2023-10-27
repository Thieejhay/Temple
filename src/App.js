import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
// import ContactUs from "./Pages/ContactUs";
import News from "./Pages/News";
import Section from "./Pages/Section";
import Programs from "./Pages/Programs";
import Section1 from "./Pages/Section1";
import Section2 from "./Pages/Section2";
import Section3 from "./Pages/Section3";
import Section4 from "./Pages/Section4";
import Section5 from "./Pages/Section5";

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about-us' element={<About />}></Route>
        {/* <Route path='contact-us' element={<ContactUs />}></Route> */}
        <Route path='news&events' element={<News />}></Route>
        <Route path='section' element={<Section />}></Route>
        <Route path='primary' element={<Section2 />}></Route>
        <Route path='early-years' element={<Section1 />}></Route>
        <Route path='secondary' element={<Section3 />}></Route>
        <Route path='college' element={<Section4 />}></Route>
        <Route path='eld' element={<Section5 />}></Route>
        <Route path='programs' element={<Programs />}></Route>
    </Routes>
   
  );
}

export default App;
