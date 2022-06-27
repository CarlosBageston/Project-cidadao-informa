import { Routes, Route } from 'react-router-dom';
import Login from '../components/login/index';
import Home from '../components/Home';
import AuthRoute from '../components/auth/authrouter';

function Paths() {
    return (
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route
                path="/"
                element={
                    <AuthRoute>
                        {' '}
                        <Login />
                    </AuthRoute>
                }
            />
        </Routes>
    );
}

export default Paths;
