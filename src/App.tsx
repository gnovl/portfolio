import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { ScrollToTop } from 'react-simple-scroll-up';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import your i18n configuration
import LanguageSwitcher from './components/LanguageSelector';

function App() {
  

  return (
    <I18nextProvider i18n={i18n}>
    <BrowserRouter basename='/portfolio'>
      <div>
      <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
        <ScrollToTop symbol='☝️' offsetTop={500} />
      </div>
    </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
