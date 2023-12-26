import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Platform } from 'react-native';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';


const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountScreen} options={{headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Messages" component={MessagesScreen} options={{headerTitleAlign: 'center'}}/>
    </Stack.Navigator>
);

export default AccountNavigator;