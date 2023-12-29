import "react-native-gesture-handler";
import React from "react";
import { Text, Button, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Screen from "./app/components/Screen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";


export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      {/* без GestureHandlerRootView не работало удаление по свайпу (появление корзинки при удалении) */}
      <GestureHandlerRootView style={{ flex: 1 }}>
       <AppNavigator />
      </GestureHandlerRootView>
    </NavigationContainer>
    
  );
}

// The function useDimensions() doesn’t exist anymore in the module “@react-native-community/hooks”.
// You can use the equivalent function useWindowDimensions() from “react-native”.

// import {useWindowDimensions} from "react-native";



// have been used in demo, I installed react-navigation/stack: 5.10.0 and react-navigation/bottom-tabs:5.10.0 to fix annoying warnings
// "@react-navigation/native": "^5.3.2",
// "@react-navigation/stack": "^5.3.5",
// "@react-navigation/bottom-tabs": "^5.4.4",
