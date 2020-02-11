import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../screens/Search';
import SearchHeader from '../components/SearchHeader';
import SearchDetail from '../screens/SearchDetail';
import SearchDetailHeader from '../components/SearchDetailHeader';

const Stack = createStackNavigator()

export default function SearchStackNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: { backgroundColor: 'black' }
            }}
        >
            <Stack.Screen 
                name="rootSearch"  
                component={Search}
                options={{
                    header: () => <SearchHeader />
                }}
            />
            <Stack.Screen 
                name="SearchDetail"  
                component={SearchDetail}
                options={{
                    header: () => <SearchDetailHeader />
                }}
            />
        </Stack.Navigator>
    )
}