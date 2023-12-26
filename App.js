import "react-native-gesture-handler";
import React from "react";
import { Text, Button } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Screen from "./app/components/Screen";

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button 
    title="Click"
    onPress={() => navigation.navigate('TweetDetails')}
  />
  );
  };

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button 
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen 
      name="TweetDetails"  
      component={TweetDetails} 
      options={({ route }) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      {/* без GestureHandlerRootView не работало удаление по свайпу (появление корзинки при удалении) */}
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StackNavigator />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

// The function useDimensions() doesn’t exist anymore in the module “@react-native-community/hooks”.
// You can use the equivalent function useWindowDimensions() from “react-native”.

// import {useWindowDimensions} from "react-native";


// have been used in demo
// "@react-navigation/native": "^5.3.2",
// "@react-navigation/stack": "^5.3.5",
