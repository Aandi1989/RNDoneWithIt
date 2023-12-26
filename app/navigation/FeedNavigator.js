import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Platform } from 'react-native';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode="modal" 
    // возвращение на предыдущий экран по свайпу вниз для андроида не работает
        screenOptions={() => ({
            cardOverlayEnabled: true,
            ...Platform.select({
                android: TransitionPresets.RevealFromBottomAndroid,
                default: TransitionPresets.DefaultTransition,
              })
        })}
        >
        <Stack.Screen name="Listing" component={ListingsScreen} options={{headerTitleAlign: 'center'}}/>
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} options={{headerTitleAlign: 'center'}}/>
    </Stack.Navigator>
);

export default FeedNavigator;