import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450' }} />
        <Card.Content>
          <Title style={styles.title}>{movie.Title}</Title>
          <Paragraph style={styles.year}>{movie.Year}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    backgroundColor: '#1f1f1f', // Netflix-like card background
  },
  title: {
    color: '#ffffff', // White text color
  },
  year: {
    color: '#ffffff', // White text color
  },
});

export default MovieCard;
