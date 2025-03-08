import React from 'react';

function App() {
    // Store the current year using JavaScript's Date object
    const currentYear = new Date().getFullYear();

    // Define a boolean variable for login status
    const isLoggedIn = true; // Change to false to test both cases

    return (
        <div>
            {/* JSX with an h1 heading */}
            <h1>ENSF-381: Full Stack Web Development</h1>

            {/* Paragraph describing the topic */}
            <p>React Components</p>

            {/* Embedding JavaScript expressions in JSX */}
            <p>Current Year: {currentYear}</p>

            {/* Conditional rendering using a ternary operator */}
            <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
        </div>
    );
}

export default App;
