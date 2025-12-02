import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './comp/navbar';
import Footer from './comp/footer';
import Home from './pages/home';
import ExperiencePage from './pages/exp';
import SocialsPage from './pages/soc';
import TimelinePage from './pages/tl';

function App() {
  return (
    <Router>
      {/* Header and Footer are persistent across pages */}
      <Header />
      
      <main className="pb-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exp" element={<ExperiencePage />} />
          <Route path="/soc" element={<SocialsPage />} />
          <Route path="/tl" element={<TimelinePage />} />
          
          {/* Fallback route */}
          <Route path="*" element={<Home />} /> 
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
