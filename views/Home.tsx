
import React, { useState, useMemo } from 'react';
import { LOCATIONS, WOLT_PARTNERS } from '../constants';
import { Location } from '../types';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<Location>(LOCATIONS[0]);

  const filteredLocations = useMemo(() => {
    return LOCATIONS.filter(loc => 
      loc.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      loc.address[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      loc.city[language].toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, language]);

  const groupedLocations = useMemo(() => {
    return filteredLocations.reduce((acc, loc) => {
      const cityLabel = loc.city[language];
      if (!acc[cityLabel]) acc[cityLabel] = [];
      acc[cityLabel].push(loc);
      return acc;
    }, {} as Record<string, Location[]>);
  }, [filteredLocations, language]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 animate-fade-in transition-colors duration-300">
      <div className="mb-8 text-center sm:text-left">
        <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">{t('home_title')}</h1>
        <p className="text-slate-600 dark:text-slate-400">{t('home_subtitle')}</p>
      </div>

      <div className="mb-10 relative">
        <i className="fas fa-search absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"></i>
        <input 
          type="text"
          placeholder={t('home_search_placeholder')}
          className="w-full pl-12 pr-6 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 shadow-xl transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 h-[70vh] overflow-y-auto custom-scrollbar pr-2 space-y-6">
          {Object.keys(groupedLocations).length > 0 ? (
            Object.keys(groupedLocations).map((city) => {
              const items = groupedLocations[city];
              return (
                <div key={city} className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="h-px bg-slate-200 dark:bg-slate-700 flex-grow"></span>
                    {city}
                    <span className="h-px bg-slate-200 dark:bg-slate-700 flex-grow"></span>
                  </h3>
                  <div className="space-y-3">
                    {items.map((loc) => (
                      <button
                        key={loc.id}
                        onClick={() => setSelectedLocation(loc)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all flex flex-col gap-1 relative overflow-hidden group ${
                          selectedLocation.id === loc.id
                            ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                            : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-orange-300'
                        }`}
                      >
                        <div className={`absolute left-0 top-0 bottom-0 w-1 transition-transform origin-top ${selectedLocation.id === loc.id ? 'bg-orange-500 scale-y-100' : 'bg-transparent scale-y-0'}`}></div>
                        <span className="font-bold text-lg text-slate-800 dark:text-white group-hover:text-orange-600 transition-colors">
                          {loc.title[language]}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {loc.address[language]}
                        </span>
                        {loc.woltUrl && (
                          <div className="mt-2 inline-flex items-center gap-2 text-xs font-semibold py-1 px-3 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 w-fit">
                            <i className="fas fa-motorcycle"></i> Wolt Delivery
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-20 text-slate-400">
              <i className="fas fa-map-marker-alt text-4xl mb-4 opacity-20"></i>
              <p>{t('home_no_results')}</p>
            </div>
          )}
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-800 p-3 rounded-3xl shadow-2xl border-2 border-slate-100 dark:border-slate-700 h-[70vh] relative">
            <iframe
              src={selectedLocation.mapUrl}
              className="w-full h-full rounded-2xl border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="absolute bottom-6 right-6 flex flex-col gap-3">
              {selectedLocation.woltUrl && (
                <a 
                  href={selectedLocation.woltUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-bold transition-transform hover:-translate-y-1"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Wolt_logo.svg/1024px-Wolt_logo.svg.png" className="h-4" alt="Wolt" />
                  {t('wolt_order')}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 dark:from-cyan-800 dark:to-blue-900 rounded-3xl p-8 sm:p-12 text-white overflow-hidden relative">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">{t('wolt_section_title')}</h2>
              <p className="opacity-90 mb-6">{t('wolt_section_desc')}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {WOLT_PARTNERS.map(partner => (
                  <a
                    key={partner.id}
                    href={partner.url}
                    target="_blank"
                    className="bg-white text-cyan-700 px-6 py-3 rounded-xl font-bold hover:bg-cyan-50 transition-colors shadow-lg"
                  >
                    {partner.city}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <i className="fas fa-motorcycle text-[120px] opacity-20 rotate-12"></i>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/20 rounded-full -ml-20 -mb-20 blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
