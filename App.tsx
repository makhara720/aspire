
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import AgePopup from './components/AgePopup';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [isAgeVerified, setIsAgeVerified] = useState(() => {
    return localStorage.getItem('age-verified') === 'true';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleAgeConfirm = () => {
    setIsAgeVerified(true);
    localStorage.setItem('age-verified', 'true');
  };

  return (
    <LanguageProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
          {!isAgeVerified && <AgePopup onConfirm={handleAgeConfirm} />}
          <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/locations" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
