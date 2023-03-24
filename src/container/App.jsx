import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from '../pages/NotFound'
import LandingPage from "../pages/LandingPage";
import RecuperarContraseña from '../pages/RecuperarContraseña';
import Register from '../pages/Register';
import Login from '../pages/Login';
import HomePage from '../pages/HomePage';
import MisCursos from '../pages/MisCursos'
import MisCursosTeacher from '../pages/MisCursosTeacher';

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/recuperarContraseña" element={<RecuperarContraseña/>} />
                <Route path="/homePage" element={<HomePage/>}/>
                <Route path="/misCursos" element={<MisCursos/>}/>
                <Route path='/misCursosTeacher' element={<MisCursosTeacher/>}/>
                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter> 
     );
}

export default App;