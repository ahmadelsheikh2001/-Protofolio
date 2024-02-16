// TitleContext.js
import React, { createContext, useState, useContext } from 'react';

const TitleContext = createContext();

export const useTitle = () => useContext(TitleContext);

export const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState('Default Title');

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};
