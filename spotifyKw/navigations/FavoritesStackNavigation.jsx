import React from 'react';
import Favorites from '../screens/Favorites';
import { createStackNavigator } from '@react-navigation/stack';
import FavoritesHeader from '../components/FavoritesHeader'

const Stack = createStackNavigator()

export default function HomeStackNavigation() {
    return (
        <Stack.Navigator 
            screenOptions={{
                cardStyle: { backgroundColor: 'black' },
            }}
        >
            <Stack.Screen 
                name="Favorites" 
                component={Favorites}
                options={{
                    header: () => <FavoritesHeader />
                }}
            />
        </Stack.Navigator>
    )
}