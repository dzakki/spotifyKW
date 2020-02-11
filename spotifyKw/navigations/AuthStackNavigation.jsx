import React from 'react';
import {  createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';

const Stack = createStackNavigator()

export default function AuthStackNavigation() {
    return (
        <Stack.Navigator
        screenOptions={{
            cardStyle: { backgroundColor: '#222327' },
            headerShown: false
        }}
        >
            <Stack.Screen 
                name="Login"
                component={Login} 
            />
        </Stack.Navigator>
    )
}