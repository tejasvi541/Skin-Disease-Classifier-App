import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import CameraSVG from "../assets/CameraSVG.svg";
import CameraRotate from "../assets/CameraRotate.svg";
import axios from "axios";

const CameraComponent = ({ navigation }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [base64Image, setBase64Image] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync({
        base64: true,
        quality: 0.5,
      });
      setImage(data.uri);

      await axios
        .post(" https://7af8-101-0-35-190.ngrok-free.app/predict/image", {
          data: data.base64,
        })
        .then((res) => {
          console.log(res);
          navigation.navigate("Result", {
            capture: data.uri,
            answer: res.data[0],
          });
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    }
  };
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.topWrapper}>
      <ImageBackground
        source={require("../assets/BackgroundImage.jpg")}
        style={styles.backgroundImage}>
        <View style={styles.cameraContainer}>
          <Camera
            ref={(ref) => setCamera(ref)}
            style={styles.fixedRatio}
            type={type}
            ratio={"1:1"}
          />
        </View>
        <View style={styles.iconWrapper}>
          <TouchableOpacity
            style={styles.pictureButton}
            title="Flip Image"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <View>
              <CameraRotate width={100} height={100} />
              <Text style={styles.appButtonText}>Flip Camera</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pictureButton}
            title="Take Picture"
            onPress={() => takePicture()}>
            <View>
              <CameraSVG width={100} height={100} />
              <Text style={styles.appButtonText}>Take Pic</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* {image && <Image source={{ uri: image }} style={{ flex: 1 }} />} */}
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
    width: 350,
    height: 350,
    marginTop: 80,
    marginLeft: 30,
    marginRight: 30,
    padding: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: "#65b7e0",
    borderRadius: 10,
  },
  pictureButton: {
    margin: 10,
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
  iconWrapper: {
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
    padding: 10,
    alignSelf: "center",
  },
});
export default CameraComponent;
