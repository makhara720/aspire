
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t('nav_about'), path: '/' },
    { label: t('nav_locations'), path: '/locations' },
  ];

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-orange-600 dark:bg-orange-800 text-white shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group z-50">
          <div className="bg-white p-1 rounded-lg transition-transform group-hover:rotate-12">
            <img 
              src="/images/location.png" 
              alt="Logo" 
              className="h-10 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/aspire/100/100';
              }}
            />
          </div>
          <span className="text-xl font-bold tracking-tight">ASPIRE NEXI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                location.pathname === item.path
                  ? 'bg-white text-orange-600 shadow-md'
                  : 'hover:bg-white/10 text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="h-6 w-px bg-white/20 mx-1"></div>

          <button
            onClick={() => setLanguage(language === 'ka' ? 'en' : 'ka')}
            className="px-3 py-1.5 rounded-lg border border-white/30 text-xs font-bold hover:bg-white/10 transition-colors uppercase min-w-[3.5rem]"
          >
            {language === 'ka' ? 'ENGLISH' : 'ქართული'}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Toggle Theme"
          >
            <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
          </button>
        </nav>

        {/* Mobile Actions (Menu Button) */}
        <div className="flex items-center gap-3 md:hidden z-50">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white/10"
          >
            <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-white text-xl"
            aria-label="Menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-orange-600 dark:bg-orange-900 z-40 transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-6 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-2xl font-bold py-4 border-b border-white/10 ${
                location.pathname === item.path ? 'text-white' : 'text-white/60'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="pt-6 space-y-4">
             <button
              onClick={() => {
                setLanguage(language === 'ka' ? 'en' : 'ka');
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center justify-between p-4 bg-white/10 rounded-2xl font-bold"
            >
              <span>{language === 'ka' ? 'Switch to English' : 'გადართვა ქართულზე'}</span>
              <i className="fas fa-language text-xl"></i>
            </button>
          </div>

          <div className="mt-auto pb-10 flex justify-center gap-8">
            <a href="#" className="text-white/60 text-2xl hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white/60 text-2xl hover:text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white/60 text-2xl hover:text-white"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
