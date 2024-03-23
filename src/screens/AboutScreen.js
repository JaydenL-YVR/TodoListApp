import React from 'react';
import { View, StyleSheet, Text, Button, Pressable, Alert } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ navigation }) => {
    // Variables
    const appName = 'ToDoList App';
    const authorName = 'Jayden Liwanag';
    const currentDate = new Date().toLocaleDateString();

    // Easter Egg Features
    const handlePressAuthor = () => {
        Alert.alert('"Hello, thanks for using my app!😊"');
    };

    return (
        <MainLayout>
            <View style={styles.container}>
                <Text style={styles.text}>Welcome to My {appName}!</Text>
                <Pressable onPress={handlePressAuthor}>
                    <Text style={styles.authorName}>Developed by {authorName}</Text>
                </Pressable>
                <Text style={styles.text}>Current Date: {currentDate}</Text>
            </View>
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'teal',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
        color: 'white',
    },
    authorName: {
        fontSize: 20,
        marginBottom: 10,
        color: 'white',
    },
});

export default AboutScreen;
