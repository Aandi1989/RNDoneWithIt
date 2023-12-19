import React, { useState } from "react";
import {
  View,
  Image,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
  TextInput,
  Text,
  Switch,
} from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const [isNew, setIsNew] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
     <Screen>
        <AppPicker icon="apps" placeholder="Category"/>
        <AppTextInput icon="email" placeholder="Email"/>
     </Screen>
    </GestureHandlerRootView>
  );
}

// The function useDimensions() doesn’t exist anymore in the module “@react-native-community/hooks”.
// You can use the equivalent function useWindowDimensions() from “react-native”.

// import {useWindowDimensions} from "react-native";
