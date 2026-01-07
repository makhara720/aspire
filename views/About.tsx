
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { language, t } = useLanguage();
  
  return (
    <div className="animate-fade-in transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="./images/main.jpg" 
            className="w-full h-full object-cover opacity-20 dark:opacity-30" 
            alt="Hero Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-transparent dark:from-slate-950 dark:via-slate-950/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-sm">
            Aspire Nexi <span className="text-orange-600 italic">Georgia</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            {t('about_hero_subtitle')}
          </p>
          <Link 
            to="/locations" 
            className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl transition-all hover:scale-105 active:scale-95"
          >
            {t('about_hero_cta')}
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* New Single Image & Description Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image Container */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-orange-600/10 dark:bg-orange-600/5 rounded-3xl blur-2xl group-hover:bg-orange-600/20 transition-all duration-500"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-100 dark:border-slate-800">
                  <img 
                    src="./images/product2.jpg" 
                    alt="Featured Aspire Content" 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent mix-blend-overlay"></div>
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div>
                <span className="text-orange-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
                  {t('about_feature_label')}
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {t('about_feature_title')}
                </h2>
              </div>
              
              <div className="h-1.5 w-20 bg-orange-600 rounded-full"></div>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                {t('about_feature_desc')}
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-semibold">
                  <i className="fas fa-check-circle text-orange-600 text-xl"></i>
                  <span className='px'> {t('px')}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-semibold">
                  <i className="fas fa-check-circle text-orange-600 text-xl"></i>
                  <span className='qs'> {t('qs')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: 'fa-star', title: t('val_quality_title'), desc: t('val_quality_desc') },
              { icon: 'fa-user-tie', title: t('val_natural_title'), desc: t('val_natural_desc') },
              { icon: 'fa-battery', title: t('val_service_title'), desc: t('val_service_desc') }
            ].map((value, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 bg-white dark:bg-slate-800 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:rotate-6 group-hover:bg-orange-600 group-hover:text-white shadow-lg border border-slate-100 dark:border-slate-700">
                  <i className={`fas ${value.icon} text-2xl`}></i>
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-orange-600 transition-colors">{value.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed px-4">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
