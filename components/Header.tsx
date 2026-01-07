
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode }) => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t('nav_about'), path: '/' },
    { label: t('nav_locations'), path: '/locations' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-orange-600 dark:bg-orange-800 text-white shadow-lg backdrop-blur-md bg-opacity-90 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-white p-1 rounded-lg transition-transform group-hover:rotate-12">
            <img 
              src="images\location.png" 
              alt="Logo" 
              className="h-10 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'images/location.png';
              }}
            />
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:block">ASPIRE NEXI</span>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                location.pathname === item.path
                  ? 'bg-white text-orange-600 shadow-md'
                  : 'hover:bg-orange-500 text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="h-6 w-px bg-white/20 mx-1 hidden sm:block"></div>

          <button
            onClick={() => setLanguage(language === 'ka' ? 'en' : 'ka')}
            className="px-3 py-1.5 rounded-lg border border-white/30 text-xs font-bold hover:bg-white/10 transition-colors uppercase min-w-[3rem]"
          >
            {language === 'ka' ? 'EN' : 'GE'}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-orange-500 transition-colors"
            aria-label="Toggle Theme"
          >
            <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
