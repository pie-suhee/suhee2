import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Main from './pages/Main';
import Profile from './pages/Profile';
import Timeline from './pages/Timeline';
import Skill from './pages/Skill';
import Project from './pages/Project';
import ProjectDetail from './pages/ProjectDetail';
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
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/skill" element={<Skill />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/project/:id" element={<ProjectDetail />} />
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