import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>ToDoList Application</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 4,
    borderColor: 'white',
    paddingBottom: 10,
  },
  headerText: {
    color: 'black',
    fontSize: 22,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Header;
