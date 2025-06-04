import React from 'react';
import { motion } from 'framer-motion';

const DashboardHome: React.FC = () => {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6"
      >
        Welcome Back!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 mb-8"
      >
        Here’s an overview of your account and projects.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h3 className="text-xl font-semibold mb-2">Your Brief</h3>
          <p className="text-gray-400 mb-4">You haven’t completed your project brief yet.</p>
          <Link to="/dashboard/brief" className="text-blue-400 hover:underline">
            Complete Brief →
          </Link>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h3 className="text-xl font-semibold mb-2">Active Projects</h3>
          <p className="text-gray-400 mb-4">You currently have no active projects.</p>
          <button className="text-indigo-400 hover:underline">Browse Services</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;