import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Main from './pages/Main';
import Profile from './pages/Profile';
import Footer from './components/Footer';

const AppRoutes = () => {
    const location = useLocation();

    return (
        <>
            <Main />
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </AnimatePresence>
            <Footer />
        </>
    );
};

const App = () => (
    <Router>
        <AppRoutes />
    </Router>
);

export default App;