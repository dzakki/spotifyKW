import React from 'react';
import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TabNavigatorIcon from '../components/TabNavigatorIcon';
import Home from "./HomeStackNavigation";

const Tab = createMaterialBottomTabNavigator();


function Search() {
    return <Text>Search page</Text>
}
function Favorites() {
    return <Text>Favorites page</Text>
}

export default function RootNavigation() {
    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: '#222327' }}
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => <TabNavigatorIcon icon="md-home" />
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search} 
                options={{
                    tabBarIcon: () => <TabNavigatorIcon icon="md-search" />
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorites} 
                options={{
                    tabBarIcon: () => <TabNavigatorIcon icon="md-heart-empty" />
                }}
            />
        </Tab.Navigator>
    )
}