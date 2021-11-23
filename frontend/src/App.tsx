import React from 'react';
import { OrdersProvider } from './context/orders';
import Home from './pages/Home';

import { GlobalStyles } from './styles';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <OrdersProvider>
        <Home />
      </OrdersProvider>
    </div>
  );
};

export default App;
