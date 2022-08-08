import { Routes, Route } from 'react-router-dom';
import Login from '../components/login/index';
import Home from '../components/Home';
import AuthRoute from '../components/auth/authrouter';
import ReportScreen from '../components/report screen';
import ResetPasswordPage from '../components/forgotpassword';

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
            <Route
                path="/ReportScreen/:id"
                element={
                    <AuthRoute>
                        <ReportScreen />
                    </AuthRoute>
                }
            />
            <Route
              path="/Reset"
              element={<ResetPasswordPage/>}
            />
        </Routes>
    );
}

export default Paths;
