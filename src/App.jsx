// import React from 'react'
// import Navbar from './Components/Navbar/Navbar'
// import Hero from './Components/Hero/Hero'
// import Programs from './Components/Programs/Programs'
// import Title from './Components/Title/Title'
// import About from './Components/About/About'
// import Core from './Components/Core/Core'
// import Contact from './Components/Contact/Contact'
// import Footer from './Components/Footer/Footer'

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <div className='container'>
//         <Title subTitle='Our services' title='Discover our diverse offerings including unforgettable tourism experiences, professional photography services, and luxurious hotel accommodations, all designed to exceed your expectations and create lasting memories.' />
//         <Programs />
//         <About />
//         <Title subTitle='Our Core Values'/>
//         <Core/>
//         <Title subTitle='Contact Us' title='Get in Touch' />
//       <Contact/>
// <Footer/>
//       </div>

//     </div>
//   )
// }

// export default App;







import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Core from './Components/Core/Core';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import HotelPage from './Components/HotelPage/HotelPage'; // Import your individual pages
import Travel from './Components/Travel/Travel';
import Photo from './Components/Photo/Photo';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <div className='container'>
                <Title subTitle='Our services' title='Discover our diverse offerings including unforgettable tourism experiences, professional photography services, and luxurious hotel accommodations, all designed to exceed your expectations and create lasting memories.' />
                <Programs />
                <About />
                <Title subTitle='Our Core Values' />
                <Core />
                <Title subTitle='Contact Us' title='Get in Touch' />
                <Contact />
              </div>
            </>
          } 
        />

        {/* Individual Program Pages */}
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/photo" element={<Photo />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
