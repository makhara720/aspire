
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-orange-600 dark:bg-orange-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">ASPIRE GEORGIA</h2>
          <p className="text-orange-100 opacity-80">{t('footer_tagline')}</p>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          {[
            { icon: 'fa-instagram', url: '#' },
            { icon: 'fa-facebook', url: '#' },
            { icon: 'fa-tiktok', url: '#' },
            { icon: 'fa-linkedin', url: '#' }
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white bg-opacity-10 border border-white border-opacity-20 hover:bg-orange-500 hover:scale-110 transition-all duration-300"
            >
              <i className={`fab ${social.icon} text-xl`}></i>
            </a>
          ))}
        </div>

        <p className="text-sm opacity-60">© 2026 Aspire Georgia. {t('footer_rights')}.</p>
      </div>
    </footer>
  );
};

export default Footer;
