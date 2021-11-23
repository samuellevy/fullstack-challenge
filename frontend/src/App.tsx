import React from 'react';
import Home from './pages/Home';

import { GlobalStyles } from './styles';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
};

export default App;
