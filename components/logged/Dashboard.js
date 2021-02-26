import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Groups } from './loggedComponents/Groups';
import { VChats } from './loggedComponents/VChats';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUsers, faVideo } from '@fortawesome/free-solid-svg-icons'

const Tab = createBottomTabNavigator();

export const Dashboard = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Groups" component={ Groups} options={{
                tabBarIcon:() => <FontAwesomeIcon icon={faUsers}/>
            }} />
            <Tab.Screen name="VChats" component={ VChats} options={{
                tabBarIcon:() => <FontAwesomeIcon icon={faVideo}/>
            }}/>
        </Tab.Navigator>
    );
}
