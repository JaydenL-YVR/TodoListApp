import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';

const Stack = createStackNavigator();

function App() {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="About" component={AboutScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
