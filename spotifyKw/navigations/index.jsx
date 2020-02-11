import React, { useEffect } from 'react';
import { Text } from 'react-native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Auth from './AuthStackNavigation';
import TabNavigatorIcon from '../components/TabNavigatorIcon';
import Home from "./HomeStackNavigation";
import Search from './SearchStackNavigation';
import Favorites from './FavoritesStackNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedAction } from '../store/action/auth';

const Tab = createBottomTabNavigator();

export default function RootNavigation() {

    const { isLogged } = useSelector(state => state.general)
    const dispacth = useDispatch()
    useEffect(() => {
        dispacth(isLoggedAction())
    }, [])

    return (
        <Tab.Navigator
            tabBarOptions={{
                tabStyle: {
                    backgroundColor: '#222327'
                }
            }}
        >
            {
                !isLogged
                    ?(
                            <Tab.Screen 
                                name="Auth" 
                                component={Auth} 
                                options={{
                                    tabBarVisible: false
                                }}
                            />
                    )
                    :(
                        <>
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
                        </>
                    )
            }
        </Tab.Navigator>
    )
}