import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SearchPage from './pages/SearchPage/SearchPage';
import DetailPage from './pages/DetailPage/DetailPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (

    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;

