import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from '../pages/NotFound'
import LandingPage from "../pages/LandingPage";
import RecuperarContraseña from '../pages/RecuperarContraseña';
import Register from '../pages/Register';

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/registrarse" element={<Register/>}/>
                <Route path="/recuperarContraseña" element={<RecuperarContraseña/>} />
                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter> 
     );
}

export default App;