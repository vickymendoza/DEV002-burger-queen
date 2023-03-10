
import LandingPage from './components/LandingPage';
import Login from './components/Login_App';
import Waiter from './components/waiter';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const user = true
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login user={user} />} />
        <Route path="waiter" element={<Waiter user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

