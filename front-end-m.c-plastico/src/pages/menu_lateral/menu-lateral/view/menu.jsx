import React from 'react';
import MenuLateral from '../../../menu_lateral/menu-lateral/components/menu.jsx';

const AppView = () => {
  return (
    <div className="App">
      <MenuLateral />
      <div style={{ marginLeft: '250px', padding: '20px' }}>
        <h1>Página Inicial</h1>
      </div>
    </div>
  );
};

export default AppView;
