import React from 'react';
import { ToastContainer } from 'react-toastify';
import { OrdersProvider } from './context/orders';
import Home from './pages/Home';
import { GlobalStyles } from './styles';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <OrdersProvider>
        <Home />
      </OrdersProvider>
      <ToastContainer />
    </div>
  );
};

export default App;
