import { Routes, Route } from 'react-router-dom';
import Login from '../components/login/index';
import Home from '../components/Home';
import AuthRoute from '../components/auth/authrouter';
import ReportScreen from '../components/report screen';

function Paths() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route
                path="/Home"
                element={
                    <AuthRoute>
                        <Home />
                    </AuthRoute>
                }
            />
            <Route path="/ReportScreen" element={<ReportScreen />} />
        </Routes>
    );
}

export default Paths;
