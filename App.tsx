
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isAnimating, setIsAnimating] = useState(false);

  const navigateTo = (page: Page) => {
    if (page !== currentPage) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
        setIsAnimating(false);
      }, 300); // Match transition duration
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      <main className={`flex-grow transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;
