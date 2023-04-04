import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";

const CameraComponent = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
    }
  };
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.topWrapper}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={"1:1"}
        />
      </View>
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
        <Text style={styles.appButtonText}>Flip Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.pictureButton}
        title="Take Picture"
        onPress={() => takePicture()}>
        <Text style={styles.appButtonText}>Take Picture</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
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
  pictureButton: {
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
export default CameraComponent;
