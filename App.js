/**
 * My To Do List App
 * Author: Jayden Liwanag
 * Date: 2024-02-17
 * 
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ToDoList style={styles.todolist} />
            <ToDoForm style={styles.todoform} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    todolist: {

    },

    todoform: {

    },
});

export default App;
