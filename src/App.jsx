// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// import { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   html, body {
//     width: 100%;
//     height: 100%;
//     overflow-x: hidden; /* Prevent horizontal scroll */
//   }

//   #root {
//     width: 100%;
//     height: 100%;
//   }
// `;

// function App() {
//   return (
//     <>
//     <GlobalStyle />
//       <Navbar />
//       <Hero />
//       <About />
//       <Services />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;


import React from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import More from './components/More';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Sidebar />
      <About />
      <Certificates />
      <Projects />
      <More />
      <Contact />
    </>
  );
}

export default App;

