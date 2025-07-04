import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Countries from './pages/Countries';
import Team from './pages/Teams';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import { usePageLoading } from './hooks/useLoadingState';
import ScrollToTop from './ScrollToTop';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

function AppContent() {
  const location = useLocation();
  const { isLoading } = usePageLoading();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      // Add a small delay for smooth transition
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  // Check if current route is projects page
  const isProjectsPage = location.pathname === '/projects';

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
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/teams" element={<Team />} />
          </Routes>
          {!isProjectsPage && <Footer />}
        </ErrorBoundary>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
