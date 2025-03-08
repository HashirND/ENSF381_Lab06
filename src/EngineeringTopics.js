import React from 'react';

const topics = [
  { title: "Software Engineering", description: "building innovative software solutions for the modern world." },
  { title: "Electrical Engineering", description: "powering innovation in electronics and systems." },
  { title: "Mechanical Engineering", description: "designing machines and systems that shape the future." },
  { title: "Chemical Engineering", description: "advancing processes for a sustainable future." }
];

function EngineeringTopics() {
  // display engineering topics list
  return (
    <div>
      <h2>engineering topic</h2>
      {topics.map((item, idx) => (
        <div key={idx}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EngineeringTopics;
