import "react-native-gesture-handler";
import React from "react";
// import { StyleSheet, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import Home from "./Components/Home";
import CameraComponent from "./Components/CameraComponent";

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTransparent: true,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Skin Disease Classifier",
        }}
      />
      <Stack.Screen
        name="Camera"
        options={{
          title: "Capture",
          headerTintColor: "#000",
        }}
        component={CameraComponent}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
