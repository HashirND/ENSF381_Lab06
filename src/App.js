import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  // main app comp
  return (
    <div>
      <Home title="Home Page" description="welcome to our website." />
      <About title="About Us" description="we are passionate about delivering quality experiences." />
      <Contact title="Contact Us" description="feel free to reach out via email or phone." />
    </div>
  );
}

export default App;
