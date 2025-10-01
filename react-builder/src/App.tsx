import React from 'react';
import './style.css';
import { Page } from './Page';
import data from './data.json';
import { ItemProps } from './items/types';

function App() {
  const items = data.items as ItemProps[];
  return (
    <div className="App">
      <Page items={items} />
    </div>
  );
}

export default App;
