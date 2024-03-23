import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {tasks.map((task, index) => (
                <Pressable key={index}>
                    <View style={[styles.task]}>
                        <Text style={styles.taskText}>{task}</Text>
                    </View>
                </Pressable>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    task: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 9,
        marginBottom: 7,
        borderWidth: 2,
        borderColor: '#CCCCCC',
    },
    taskText: {
        fontSize: 17,
        textAlign: 'center',
    },
});

export default ToDoList;