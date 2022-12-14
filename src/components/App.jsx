// react
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// components
import { NavBar } from 'components/NavBar/NavBar';
import { GlobalStyles } from '../components/GlobalStyles/GlobalStyles';
// pages
import SearchPage from 'pages/SearchPage/SearchPage';
const RatedMoviesPage = lazy(() =>
  import('pages/RatedMoviesPage/RatedMoviesPage')
);
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

//
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<SearchPage />} />
          <Route path="rated" element={<RatedMoviesPage />} />
          <Route path="movie/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
};
