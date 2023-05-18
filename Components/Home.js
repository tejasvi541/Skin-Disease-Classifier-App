import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/BackgroundImage.jpg")}
        style={styles.backgroundImage}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "white",
                paddingBottom: 10,
              }}>
              Capture the Affected Area
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "white",
                paddingBottom: 100,
              }}>
              AI will detect the disease for you !
            </Text>
            <TouchableOpacity
              style={styles.cameraButton}
              title="Open Camera"
              onPress={() => navigation.navigate("Camera")}>
              <Text style={styles.appButtonText}>Open Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  topWrapper: {
    flex: 1,
    flexDirection: "column",
  },
  cameraContainer: {
    flex: 1,
    flexDirection: "row",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  cameraButton: {
    elevation: 8,
    backgroundColor: "#65b7e0",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
export default Home;
