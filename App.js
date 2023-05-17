import "react-native-gesture-handler";
import React from "react";
// import { StyleSheet, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import Home from "./Components/Home";
import CameraComponent from "./Components/CameraComponent";
import Result from "./Components/Result";

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
      <Stack.Screen
        name="Result"
        options={{
          title: "Result of the image",
          headerTintColor: "#000",
        }}
        component={Result}
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
