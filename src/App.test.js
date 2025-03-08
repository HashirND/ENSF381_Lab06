import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import EngineeringTopics from './EngineeringTopics'; 

function App() {
  // main app component
  return (
    <div>
      <Home title="home page" description="welcome to our website." />
      <About title="about us" description="we are passionate about our work." />
      <Contact title="contact us" description="feel free to get in touch." />
      <EngineeringTopics /> {/* show engineering topics */}
    </div>
  );
}

export default App;
