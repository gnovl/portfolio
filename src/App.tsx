import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename="/portfolio">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
            <Route path="/not-found" element={<NotFound />} />
          </Routes>
          <ScrollToTopButton />
        </div>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
