import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Navbar from './components/Navbar';
import SpotifyNavbar from './components/SpotifyNavbar';

function App() {
  return (
    <Router>
      <Navbar />
      <SpotifyNavbar />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page-2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;