// src/components/Layout.tsx
import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <header>My App Header</header>
      <main>{children}</main>
      <footer>My App Footer</footer>
    </div>
  );
};

export default Layout;