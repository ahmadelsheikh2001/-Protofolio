import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { GlobalStleThemes, DarkTheme, ligthTheme } from "../style/globalStyleTheme";
import AppContext from "./app-context";

const AppProvider = (props) => {

  const {i18n} = useTranslation();
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('light');

  // =================== Set Language := ======================== //

  const setLanguage = (language) => {
    window.localStorage.setItem('lang', language);
    setLang(language);
    i18n.changeLanguage(language);
  }

  const setEnLang = () => {
    setLanguage('en');
    document.dir = 'ltr';
    document.getElementsByTagName('html')[0].setAttribute("lang", "en");
  };
  const setArLang = () => {
    setLanguage('ar');
    document.dir = 'rtl';
    document.getElementsByTagName('html')[0].setAttribute("lang", "ar");
  };

  useEffect(()=>{
    const localLangauge = localStorage.getItem('lang');
    if(localLangauge) {
      setLanguage(localLangauge);
      if(localLangauge === 'en') {
        document.dir = 'ltr';
        document.getElementsByTagName('html')[0].setAttribute("lang", "en");
      }else {
        document.dir = 'rtl';
        document.getElementsByTagName('html')[0].setAttribute("lang", "ar");
      }
    }    
  },[]);


  // =================== Set Theme := ======================= //

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  }

  const toggleTheme = () => {
    theme === 'dark' ? setMode('ligth') : setMode('dark');
  }

  useEffect(()=>{
    const localTheme = localStorage.getItem('theme');
    localStorage ? setTheme(localTheme) : setMode('ligth');
  },[]);

  const themeMode = theme === 'dark' ? DarkTheme : ligthTheme;

  // =================== Toggle Video := ======================= //


  return(
    <AppContext.Provider value={{
      lang: lang,
      enLang: setEnLang,
      arLang: setArLang,
      theme: theme,
      toggleTheme: toggleTheme,
    }}>
      <ThemeProvider theme={themeMode}>
      <GlobalStleThemes />
        {props.children}
      </ThemeProvider>
    </AppContext.Provider>
  )
};

export default AppProvider