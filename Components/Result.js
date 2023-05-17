import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

const Result = ({ route, navigation }) => {
  const { capture } = route.params;
  const { answer } = route.params;
  const goBack = async () => {
    navigation.navigate("Home");
  };
  console.log(capture);
  return (
    <View style={styles.topWrapper}>
      <ImageBackground
        source={require("../assets/BackgroundImage.jpg")}
        style={styles.backgroundImage}>
        {capture && (
          <Image source={{ uri: capture }} style={styles.imageContainer} />
        )}
        <Text style={styles.resultText}>{answer}</Text>
        <TouchableOpacity
          style={styles.backButton}
          title="Take Picture"
          onPress={() => goBack()}>
          <Text style={styles.appButtonText}>Go Back</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  topWrapper: {
    flex: 1,
    flexDirection: "column",
  },
  imageContainer: {
    width: 350,
    height: 350,
    marginTop: 150,
    marginLeft: 30,
    marginRight: 30,
    padding: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  resultText: {
    margin: 30,
    padding: 10,
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  backButton: {
    margin: 30,
    padding: 10,
    elevation: 8,
    backgroundColor: "#65b7e0",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});

export default Result;
