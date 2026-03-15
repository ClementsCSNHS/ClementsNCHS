import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Points from './pages/Points';
import News from './pages/News';
import NewsPost from './pages/NewsPost';
import FAQ from './pages/Faq';
import Volunteering from './pages/Volunteering';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/points" element={<Points />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsPost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/volunteering" element={<Volunteering />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;