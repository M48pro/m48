// src/components/Layout.tsx
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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

      <main style={{ padding: '2rem' }}>{children}</main>

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