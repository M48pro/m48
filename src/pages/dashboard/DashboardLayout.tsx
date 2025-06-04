import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-black text-white">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto p-6">
        <Outlet /> {/* Здесь будут отображаться страницы кабинета */}
      </main>
    </div>
  );
};

export default DashboardLayout;