import React from 'react';
// import { Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

import CustomHeader from '../components/CustomHeader';

import Albums from "../screens/Albums";
import HomeHeader from "../components/HomeHeader";
import AlbumDetails from '../screens/AlbumDetails';

const Stack = createStackNavigator()

export default function HomeStackNavigation() {
    return (
        <Stack.Navigator 
            screenOptions={{
                cardStyle: { backgroundColor: 'black' },
            }}
        >
            <Stack.Screen 
                name="Home" 
                component={Albums}
                options={{
                    header: () => <HomeHeader />
                }}
            />
            <Stack.Screen 
                name="Album details"
                component={AlbumDetails}
                options={{
                    header: ( { scene, previous, navigation } ) => {
                        return <CustomHeader scene={scene} previous={previous} navigation={navigation} />
                    }
                }}
            />
        </Stack.Navigator>
    )
}