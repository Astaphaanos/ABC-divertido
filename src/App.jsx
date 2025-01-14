import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './routes/HomePage/HomePage';
import SobrePage from './routes/SobrePage/SobrePage';
import JogoMemoria from './games/JogoMemoria/JogoMemoria';
import FormePalavras from './games/FormePalavras/FormePalavras';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/conheca-mais" element={<SobrePage/>}/>
        <Route path='/jogo-memoria' element={<JogoMemoria/>}/>
        <Route path='/forme-palavras' element={<FormePalavras/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
