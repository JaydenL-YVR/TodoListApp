import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>© 2024 ToDoListApp by Jayden Liwanag.</Text>
      <Text>All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    footer: {
        padding: 10,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Footer;
