// SearchPage.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { fetchMovies } from '../store/actions/movieActions';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

const SearchPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.list);
  const loading = useSelector(state => state.movies.loading);
  const error = useSelector(state => state.movies.error);
  const navigation = useNavigation();

  useEffect(() => {
    // Dispatch fetchMovies action with an initial query when component mounts
    dispatch(fetchMovies('action')); // Replace 'action' with your desired initial query
  }, [dispatch]);

  const handleSearch = (query) => {
    dispatch(fetchMovies(query));
  };

  const renderMovies = () => {
    if (loading && movies.length === 0) {
      return <ActivityIndicator size="large" style={styles.loader} />;
    }

    if (error) {
      return <Text style={styles.error}>{error}</Text>;
    }

    return movies.map((movie) => (
      <MovieCard
        key={movie.imdbID}
        movie={movie}
        onPress={() => navigation.navigate('Details', { imdbID: movie.imdbID })}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <ScrollView contentContainerStyle={styles.movieList}>
        {renderMovies()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#141414', // Netflix-like dark background
  },
  loader: {
    marginVertical: 16,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
  movieList: {
    flexGrow: 1,
  },
});

export default SearchPage;
