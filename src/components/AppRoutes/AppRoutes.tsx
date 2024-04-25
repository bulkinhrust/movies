import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '../Main';
import Movie from '../Movie';

const AppRoutes: FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  );
};

export default AppRoutes;
