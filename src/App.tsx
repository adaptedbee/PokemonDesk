import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import PokedexPage from './pages/Pokedex/Pokedex';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/pokedex" component={PokedexPage} />
    </BrowserRouter>
  );
};

export default App;
