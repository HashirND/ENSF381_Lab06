import React from 'react';

const Home = ({ title, description }) => {
  // home comp
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Home;
