import { Route, Routes } from 'react-router-dom';
import { LandingPage } from '../components/LandingPage.jsx';
import { Login } from '../components/Login_App.jsx';




export const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="login" element={<Login_App />} />
                <Route path="/" element={<Navigate to="/login" />} />

            </Routes>


        </div>
    )
}