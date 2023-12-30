import "react-native-gesture-handler";
import React, { useState, useEffect, useCallback } from "react";
import { Text, Button, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";

import Screen from "./app/components/Screen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import AppText from "./app/components/AppText";

export default function App() {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if(user) {
      setUser(user);
    };
  }

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await restoreUser();
      } catch (error) {
        console.log("Error loading app", error);
      } finally {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);


  return (
    <AuthContext.Provider value={{ user, setUser }}>
    <NavigationContainer theme={navigationTheme}>
      {/* без GestureHandlerRootView не работало удаление по свайпу (появление корзинки при удалении) */}
      <GestureHandlerRootView style={{ flex: 1 }}>
        <OfflineNotice />
        {user ? <AppNavigator/> : <AuthNavigator />}
      </GestureHandlerRootView>
    </NavigationContainer>
  </AuthContext.Provider>
  );
}

// The function useDimensions() doesn’t exist anymore in the module “@react-native-community/hooks”.
// You can use the equivalent function useWindowDimensions() from “react-native”.

// import {useWindowDimensions} from "react-native";

// have been used in demo, I installed react-navigation/stack: 5.10.0 and react-navigation/bottom-tabs:5.10.0 to fix annoying warnings
// "@react-navigation/native": "^5.3.2",
// "@react-navigation/stack": "^5.3.5",
// "@react-navigation/bottom-tabs": "^5.4.4",


 {/* these errors appeared in console after installing react-native-expo-image-cache and expo-blur
        Error: Problem validating fields in app.json. Learn more: https://docs.expo.dev/workflow/configuration/
        • should NOT have additional property 'expo'.
      Error: Problem validating asset fields in app.json. Learn more: https://docs.expo.dev/
      • Field: android.adaptiveIcon.foregroundImage - cannot access file at './assets/adaptive-icon.png'.
      • Field: Android.adaptiveIcon.foregroundImage - cannot access file at './assets/adaptive-icon.png'. */}
