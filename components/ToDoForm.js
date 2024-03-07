import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = ({ onAddTask }) => {
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if (task.trim() !== '') {
            onAddTask(task);
            setTask('');
        }
    };

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                value={task}
                onChangeText={setTask}
            />
            <Button title="Add" onPress={handleAddTask} style={styles.addButton}/>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 40,
        marginTop: 20,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
        borderRadius: 10,
    },
});

export default ToDoForm;
