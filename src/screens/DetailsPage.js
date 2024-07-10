import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../store/actions/movieActions';
import MovieDetail from '../components/MovieDetail';

const DetailsPage = () => {
  const route = useRoute();
  const { imdbID } = route.params; // Get IMDb ID from route params
  const dispatch = useDispatch(); // Redux dispatch function
  const movie = useSelector(state => state.movies.selectedMovie); // Selected movie from Redux state
  const loading = useSelector(state => state.movies.loading); // Loading state from Redux state
  const error = useSelector(state => state.movies.error); // Error state from Redux state

  useEffect(() => {
    dispatch(fetchMovieDetails(imdbID));
  }, [dispatch, imdbID]);

  return (
    <MovieDetail movie={movie} loading={loading} error={error} />
  );
};

export default DetailsPage;
