import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './pages/Main';



const AppRoutes = () => {
    return (
        <main id="main">
            <div className="guide">
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </div>
        </main>
    );
};

const App = () => (
    <Router>
        <AppRoutes />
    </Router>
);

export default App;