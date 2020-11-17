import React from 'react';
import { useRoutes } from 'hookrouter';
import NotFoundPage from './pages/NotFound/NotFound';
import routes from './routes';
import Header from './components/Header/Header';

const App = () => {
  const match = useRoutes(routes);

  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFoundPage />
  );
};

export default App;
