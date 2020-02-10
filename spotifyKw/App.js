import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from "./navigations";

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar backgroundColor="black" barStyle="dark-content"/>
        <View style={{
          marginTop: Constants.statusBarHeight
        }}></View>
        <RootNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
