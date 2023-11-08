import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>My Books</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    position:'relative', // Adjust height as needed
    backgroundColor: '#3498db', // Choose a color for the header
    justifyContent: 'center',
    alignItems: 'center',

  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AppHeader;
