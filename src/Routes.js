import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './pages/Main';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    );
};

const App = () => (
    <Router>
        <AppRoutes />
    </Router>
);

export default App;