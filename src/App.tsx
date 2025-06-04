import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';

function App() {
  return (
    <Router>
      <Layout>
        <nav style={{ textAlign: 'center', margin: '1rem 0' }}>
          <Link to="/" style={{ margin: '0 1rem', color: '#3b82f6' }}>Home</Link>
          <Link to="/about" style={{ margin: '0 1rem', color: '#3b82f6' }}>About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;