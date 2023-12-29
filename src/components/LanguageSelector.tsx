import { useTranslation } from 'react-i18next';

interface Language {
  nativeName: string;
}

const lngs: Record<string, Language> = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Español' },
  fr: { nativeName: 'Française' },
};

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='flex space-x-3 bg-gray-300'>
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
          type="button"
          onClick={() => changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
