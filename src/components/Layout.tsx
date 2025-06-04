import React from 'react';
import { Outlet } from 'react-router-dom';
import AnimatedOutlet from '@/components/AnimatedOutlet'; // или заменить на непосредственный импорт

const Layout: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <header
        style={{
          padding: '1rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <h1>🚀 M48 Project</h1>
      </header>

      <main style={{ padding: '2rem' }}>
        <AnimatedOutlet /> {/* ← Анимация между страницами */}
      </main>

      <footer
        style={{
          marginTop: 'auto',
          padding: '1rem',
          backgroundColor: '#1e40af',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <p>© {new Date().getFullYear()} M48 Studio</p>
      </footer>
    </div>
  );
};

export default Layout;