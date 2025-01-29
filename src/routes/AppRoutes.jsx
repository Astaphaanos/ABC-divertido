import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HomePage from '../pages/HomePage/HomePage';
import SobrePage from '../pages/SobrePage/SobrePage';
import JogoMemoria from '../features/games/JogoMemoria/JogoMemoria';
import FormePalavras from '../features/games/FormePalavras/FormePalavras';
import JogoGeometrico from '../features/games/JogoGeometrico/JogoGeometrico';
import CombineCores from '../features/games/CombineCores/CombineCores';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header/><HomePage/><Footer/></>}/>
        <Route path="/conheca-mais" element={<><Header/><SobrePage/><Footer/></>}/>
        
        <Route path='/jogo-memoria' element={<JogoMemoria/>}/>
        <Route path='/forme-palavras' element={<FormePalavras/>}/>
        <Route path='/formas-geometricas' element={<JogoGeometrico/>}/>
        <Route path='/combine-cores' element={<CombineCores/>}/>
      </Routes>
    </Router>
  )
}

export default AppRoutes;
