// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  Platform,
  StatusBar
} from "react-native";
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    // <WelcomeScreen />
    <ViewImageScreen />
  );
}



// The function useDimensions() doesn’t exist anymore in the module “@react-native-community/hooks”.
// You can use the equivalent function useWindowDimensions() from “react-native”.

// import {useWindowDimensions} from "react-native";
