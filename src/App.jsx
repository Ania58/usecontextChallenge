import './App.css'; // Archivo de estilos CSS
import React from 'react';
import { ThemeProvider } from './themes/ThemeContext';
import RoutesApp from './routes/RoutesApp';


const App = () => {
  return (
      <ThemeProvider>
        <div>
          <h1>My Website</h1>
          <RoutesApp />
        </div>
      </ThemeProvider>
  );
};

export default App;
