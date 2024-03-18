import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import News from "./Pages/News";
import Section from "./Pages/Section";
import Programs from "./Pages/Programs";
import Section1 from "./Pages/Section1";
import Section2 from "./Pages/Section2";
import Section3 from "./Pages/Section3";
import Section4 from "./Pages/Section4";
import Section5 from "./Pages/Section5";
import News1 from "./Pages/News1";
import News2 from "./Pages/News2";
import News3 from "./Pages/News3";
import News4 from "./Pages/News4";
import News5 from "./Pages/News5";
import Boarding from "./Pages/Boarding";
import News6 from "./Pages/News6";
import News7 from "./Pages/News7";
import News8 from "./Pages/New8";
import Policy from "./Pages/Policy";
import News9 from "./Pages/News9";
import News10 from "./Pages/News10";

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about-us' element={<About />}></Route>
        <Route path='contact-us' element={<ContactUs />}></Route>
        <Route path='news&events' element={<News />}></Route>
        <Route path='section' element={<Section />}></Route>
        <Route path='primary' element={<Section2 />}></Route>
        <Route path='early-years' element={<Section1 />}></Route>
        <Route path='secondary' element={<Section3 />}></Route>
        <Route path='college' element={<Section4 />}></Route>
        <Route path='eld' element={<Section5 />}></Route>
        <Route path='programs' element={<Programs />}></Route>
        <Route path='news-1' element={<News1 />}></Route>
        <Route path='news-2' element={<News2 />}></Route>
        <Route path='news-3' element={<News3 />}></Route>
        <Route path='news-4' element={<News4 />}></Route>
        <Route path='news-5' element={<News5 />}></Route>
        <Route path='news-6' element={<News6 />}></Route>
        <Route path='news-7' element={<News7 />}></Route>
        <Route path='news-8' element={<News8 />}></Route>
        <Route path='news-9' element={<News9 />}></Route>
        <Route path='news-10' element={<News10 />}></Route>
        <Route path='policy' element={<Policy />}></Route>
        <Route path='boarding' element={<Boarding />}></Route>
    </Routes>
   
  );
}

export default App;
