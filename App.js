import React from "react";
import {
  View,
  Image,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
} from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MessagesScreen />
    </GestureHandlerRootView>
  );
}

// The function useDimensions() doesn’t exist anymore in the module “@react-native-community/hooks”.
// You can use the equivalent function useWindowDimensions() from “react-native”.

// import {useWindowDimensions} from "react-native";
