import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Groups } from './loggedComponents/Groups/Groups';
import { VChats } from './loggedComponents/VChats';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUsers, faVideo } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const Tab = createBottomTabNavigator();

export const Dashboard = () => {
    const [accountInfo, setAccountInfo] = useState({
        groups: [
            {
                groupName : 'name1',
                messages : [1,2,3]
            },
            {
                groupName : 'name2',
                messages : [1,2,3,4,5,6]
            },
            {
                groupName : 'name3',
                messages : [1,2]
            }
        ],

    })
    return (
        <Tab.Navigator>
            <Tab.Screen name="Groups" options={{
                tabBarIcon: () => <FontAwesomeIcon icon={faUsers} />
            }}>
                {(props) => <Groups {...props} accountInfo={accountInfo} />}
            </Tab.Screen>
            <Tab.Screen name="VChats" options={{
                tabBarIcon: () => <FontAwesomeIcon icon={faVideo} />
            }}>
                {(props) => <VChats {...props} accountInfo={accountInfo} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}
