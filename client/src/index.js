import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Devicetore from './store/DeviceStore';
import UserStore from './store/UserStote';

export const Context = createContext(null);

ReactDOM.render(
    <Context.Provider value={{
      user: new UserStore(),
      device: new Devicetore(),
    }}>
      <App />
    </Context.Provider>,
  document.getElementById('root')
);