import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DashboardHome from '@/pages/dashboard/DashboardHome';
import Projects from '@/pages/dashboard/Projects';
import Files from '@/pages/dashboard/Files';
import Messages from '@/pages/dashboard/Messages';
import Invoices from '@/pages/dashboard/Invoices';
import Knowledge from '@/pages/dashboard/Knowledge';
import Settings from '@/pages/dashboard/Settings';
import ServicesPage from '@/pages/ServicesPage';
import WebDevelopmentPage from '@/pages/services/WebDevelopmentPage';
import DesignServicesPage from '@/pages/services/DesignServicesPage';
import SupportMaintenancePage from '@/pages/services/SupportMaintenancePage';
import PortfolioPage from '@/pages/PortfolioPage';
import CaseStudyPage from '@/pages/CaseStudyPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { AuthProvider } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/web-development" element={<WebDevelopmentPage />} />
            <Route path="services/design" element={<DesignServicesPage />} />
            <Route path="services/support" element={<SupportMaintenancePage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="portfolio/:id" element={<CaseStudyPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
          
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={<DashboardHome />} />
            <Route path="projects" element={<Projects />} />
            <Route path="files" element={<Files />} />
            <Route path="messages" element={<Messages />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="knowledge" element={<Knowledge />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;