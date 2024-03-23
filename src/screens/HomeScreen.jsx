import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Button } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <MainLayout>
            <Button title="Go to About" onPress={() => navigation.navigate('About')}/>
            <ToDoList tasks={tasks} />
            <ToDoForm onAddTask={addTask} />
        </MainLayout>
    );
};

export default HomeScreen;
