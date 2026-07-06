import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SiteHeader from './components/SiteHeader';
import Landing from './pages/Landing';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import { usePageLoading } from './hooks/useLoadingState';
import ErrorBoundary from './ErrorBoundary';
import './App.css';
import './styles/typography.css';

function AppContent() {
  const { isLoading } = usePageLoading();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  return (
    <div className="App">
      {!showContent && (
        <LoadingSpinner 
          isLoading={isLoading} 
          onLoadingComplete={handleLoadingComplete}
        />
      )}
      
      {showContent && (
        <ErrorBoundary>
          <SiteHeader />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/services" element={<Navigate to="/#services" replace />} />
            <Route path="/projects" element={<Navigate to="/#projects" replace />} />
            <Route path="/countries" element={<Navigate to="/#countries" replace />} />
            <Route path="/teams" element={<Navigate to="/#teams" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </ErrorBoundary>
      )}
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
