import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './pages/HomeScreen';
import MoviesScreen from './pages/MoviesScreen';
import SeriesScreen from './pages/SeriesScreen';
import GamesScreen from './pages/GamesScreen';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AppDrawer() {
    return (
        <Drawer.Navigator initialRouteName="HomeScreen">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Movies" component={MoviesScreen} />
            <Drawer.Screen name="Series" component={SeriesScreen} />
            <Drawer.Screen name="Games" component={GamesScreen} />
            <Drawer.Screen name="ProfilePage" component={ProfilePage} />
        </Drawer.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AppDrawer">
                <Stack.Screen name="AppDrawer" component={AppDrawer} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Login' }} />
                <Stack.Screen name="SignUpPage" component={SignUpPage} options={{ title: 'Sign Up' }} />
                <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ title: 'Profile' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
