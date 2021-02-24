import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Groups } from './loggedComponents/Groups';
import { VChats } from './loggedComponents/VChats';

const Tab = createBottomTabNavigator();

export const Dashboard = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Groups" component={ Groups} />
            <Tab.Screen name="VChats" component={ VChats} />
        </Tab.Navigator>
    );
}
