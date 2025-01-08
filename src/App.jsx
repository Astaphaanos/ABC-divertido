import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './routes/HomePage/HomePage';
import GamePage from './routes/GamesPage/GamePage';
import SobrePage from './routes/SobrePage/SobrePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jogos" element={<GamePage />} />
        <Route path="/conheca-mais" element={<SobrePage/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
