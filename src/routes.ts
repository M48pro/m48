import React from 'react';
import { RouteObject } from 'react-router-dom';

// Layouts
import Layout from '@/components/Layout';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

// Pages
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import WebDevelopmentPage from '@/pages/services/WebDevelopmentPage';
import DesignServicesPage from '@/pages/services/DesignServicesPage';
import SupportMaintenancePage from '@/pages/services/SupportMaintenancePage';
import PortfolioPage from '@/pages/PortfolioPage';
import CaseStudyPage from '@/pages/CaseStudyPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';

// Dashboard Pages
import DashboardHome from '@/pages/dashboard/DashboardHome';
import Projects from '@/pages/dashboard/Projects';
import Files from '@/pages/dashboard/Files';
import Messages from '@/pages/dashboard/Messages';
import Invoices from '@/pages/dashboard/Invoices';
import Knowledge from '@/pages/dashboard/Knowledge';
import Settings from '@/pages/dashboard/Settings';

// Auth
import { AuthProvider } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'services/web-development', element: <WebDevelopmentPage /> },
      { path: 'services/design', element: <DesignServicesPage /> },
      { path: 'services/support', element: <SupportMaintenancePage /> },
      { path: 'portfolio', element: <PortfolioPage /> },
      { path: 'portfolio/:id', element: <CaseStudyPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardHome /> },
      { path: 'projects', element: <Projects /> },
      { path: 'files', element: <Files /> },
      { path: 'messages', element: <Messages /> },
      { path: 'invoices', element: <Invoices /> },
      { path: 'knowledge', element: <Knowledge /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AuthProvider>
    {children}
  </AuthProvider>
);