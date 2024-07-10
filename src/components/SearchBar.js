import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Rechercher un film"
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.input}
        underlineColorAndroid="transparent"
        selectionColor="#fff"
        placeholderTextColor="#8c8c8c"
      />
      <Button
        icon={() => <Icon name="search" size={20} color="#fff" />}
        mode="contained"
        onPress={handleSearch}
        style={styles.button}
        labelStyle={{ color: '#fff', fontSize: 14 }}
      >
        Rechercher
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#141414', // Dark background like Netflix
    width: '100%',
    maxWidth: 800,
    marginHorizontal: 'auto',
    paddingVertical: 8,
    elevation: 4, // Add elevation for shadow
  },
  input: {
    flex: 1,
    width:"100%",
    backgroundColor: '#fff', // Darker background for input
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    TextInput:{color:"'#fff' "} , // Text color
    fontSize: 16,
  },
  button: {
    marginLeft: 10,
    height: 40,
    backgroundColor: '#e50914', // Netflix red
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchBar;
