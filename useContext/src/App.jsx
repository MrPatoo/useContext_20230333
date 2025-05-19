import './App.css'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Information from './pages/Informacion';
import Dashboard from './pages/Dashboard';
import Login from './pages/login';
import PrivateRoute from './components/PrivateRoute';
import Contactos from './pages/Contactos';

function App() {
  return (
    <>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route element={<PrivateRoute/>}>

                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/information" element={<Information/>}/>
              </Route>
              <Route path="/contactos" element={<Contactos/>}/>

            </Routes>
          </BrowserRouter>
        </AuthProvider>
    </>
  )
}

export default App
