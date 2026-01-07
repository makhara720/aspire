
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface AgePopupProps {
  onConfirm: () => void;
}

const AgePopup: React.FC<AgePopupProps> = ({ onConfirm }) => {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl transition-opacity duration-500"></div>
      
      {/* Modal - Added max-height and overflow-y-auto for mobile scrollability */}
      <div className="relative bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl max-w-lg w-full max-h-[90dvh] overflow-y-auto custom-scrollbar border border-slate-200 dark:border-slate-700 animate-fade-in flex flex-col">
        {/* Decor items inside the scrollable area or absolute positioned */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-600/10 rounded-full -ml-16 -mb-16 blur-2xl pointer-events-none"></div>

        <div className="p-8 md:p-12 text-center space-y-6">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-id-card text-2xl md:text-3xl"></i>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {t('age_popup_title')}
          </h2>
          
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            {t('age_popup_desc')}
          </p>

          <div className="flex flex-col gap-3 pt-4">
            <button
              onClick={onConfirm}
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-2xl transition-all shadow-xl hover:shadow-orange-600/20 hover:scale-[1.02] active:scale-95"
            >
              {t('age_popup_confirm')}
            </button>
            <button
              onClick={() => window.location.href = 'https://google.com'}
              className="w-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 font-bold py-4 rounded-2xl transition-all"
            >
              {t('age_popup_decline')}
            </button>
          </div>

          <p className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 pt-2 pb-2">
            Aspire Nexi Georgia &copy; 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgePopup;
