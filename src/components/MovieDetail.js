import React from 'react';
import { ScrollView, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Card, Paragraph, Title, Divider, Chip } from 'react-native-paper';
import { Rating } from 'react-native-ratings';

const MovieDetail = ({ movie, loading, error }) => {

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#e50914" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Paragraph style={styles.error}>Error: {error}</Paragraph>
      </View>
    );
  }

  if (!movie) {
    return (
      <View style={styles.center}>
        <Paragraph style={styles.error}>No movie found</Paragraph>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>{movie.Title}</Title>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450' }} />
        <Card.Content>
          <Paragraph style={styles.plot}>{movie.Plot}</Paragraph>
        </Card.Content>
      </Card>
      <Divider style={styles.divider} />
      <Paragraph style={styles.detail}>Duration: {movie.Runtime}</Paragraph>
      <Paragraph style={styles.detail}>Genre: {movie.Genre}</Paragraph>
      <Paragraph style={styles.detail}>Director: {movie.Director}</Paragraph>
      <Paragraph style={styles.detail}>Language: {movie.Language}</Paragraph>
      <Paragraph style={styles.detail}>Country: {movie.Country}</Paragraph>
      <Divider style={styles.divider} />
      <Paragraph style={styles.awards}>Awards: {movie.Awards}</Paragraph>
      <Rating
        showRating
        readonly
        startingValue={parseFloat(movie.imdbRating)}
        imageSize={20}
        tintColor="#141414" // Background color for rating
        ratingColor="#e50914" // Netflix red for rating stars
        style={styles.rating}
      />
      <Chip icon="information" style={styles.chip}>{movie.Metascore}</Chip>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#141414', // Netflix-like dark background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#ffffff', // White text color
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#1f1f1f', // Darker background for card
  },
  divider: {
    marginVertical: 16,
  },
  plot: {
    fontSize: 16,
    marginBottom: 16,
    color: '#ffffff', // White text color
  },
  detail: {
    fontSize: 16,
    marginBottom: 8,
    color: '#ffffff', // White text color
  },
  awards: {
    fontSize: 16,
    marginBottom: 16,
    color: '#ffffff', // White text color
  },
  rating: {
    marginBottom: 16,
  },
  chip: {
    marginTop: 16,
    backgroundColor: '#e50914', // Netflix red for chip background
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141414', // Netflix-like dark background
  },
  error: {
    color: 'red',
  },
});

export default MovieDetail;
