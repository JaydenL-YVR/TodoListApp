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
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#CCCCCC',
    },
    taskText: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default ToDoList;
