import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const APIKEY ="e23dddb9";
export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (imdbID) => {
  const response = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=${APIKEY}`);
  return response.data;
});

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (query) => {
  const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${APIKEY}`);
  return response.data.Search || [];
});
