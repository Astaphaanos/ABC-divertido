import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './routes/HomePage/HomePage';
import SobrePage from './routes/SobrePage/SobrePage';
import JogoMemoria from './games/JogoMemoria/JogoMemoria';
import FormePalavras from './games/FormePalavras/FormePalavras';
import JogoGeometrico from './games/JogoGeometrico/JogoGeometrico';
import CombineCores from './games/CombineCores/CombineCores';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header/><HomePage/></>}/>
        <Route path="/conheca-mais" element={<><Header/><SobrePage/></>}/>
        
        <Route path='/jogo-memoria' element={<JogoMemoria/>}/>
        <Route path='/forme-palavras' element={<FormePalavras/>}/>
        <Route path='/formas-geometricas' element={<JogoGeometrico/>}/>
        <Route path='/combine-cores' element={<CombineCores/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
