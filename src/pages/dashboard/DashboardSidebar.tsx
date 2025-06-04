import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 p-6">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <nav className="space-y-2">
        <Link to="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-800">
          Home
        </Link>
        <Link to="/dashboard/brief" className="block py-2 px-4 rounded hover:bg-gray-800 bg-gray-800">
          Project Brief
        </Link>
        <Link to="/dashboard/settings" className="block py-2 px-4 rounded hover:bg-gray-800">
          Settings
        </Link>
        <Link to="/logout" className="block py-2 px-4 rounded hover:bg-red-900/30 text-red-400">
          Logout
        </Link>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;