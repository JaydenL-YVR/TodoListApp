import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);
    
    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ToDoList tasks={tasks} />
            <ToDoForm onAddTask={addTask} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'teal',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
