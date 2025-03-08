import React from 'react';

function App() {
    // current year 2025
    const currentYear = new Date().getFullYear();

    // login status with bool
    const isLoggedIn = true; // change to false

    return (
        <div>
            {/* heading*/}
            <h1>ENSF-381: Full Stack Web Development</h1>

            {/* topic/}
            <p>React Components</p>

            {/* embedding JS expressions in JSX */}
            <p>Current Year: {currentYear}</p>

            {/* conditional rendering */}
            <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
        </div>
    );
}

export default App;
