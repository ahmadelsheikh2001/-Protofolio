import React from "react";


const AppContext = React.createContext({
  lang: 'en',
  theme: 'ligth',
  enLang: () => {},
  arLang: () => {},
  toggleTheme: () => {},
});

export default AppContext;