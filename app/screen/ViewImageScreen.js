import React from "react";
import { StyleSheet, View, Image, Platform, StatusBar } from "react-native";

const ViewImageScreen = () => (
  <View style={styles.root}>
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View
        style={{
          backgroundColor: "#fc5c65",
          width: 75,
          height: 75,
        }}
      />
      <View
        style={{
          backgroundColor: "#4ECDC4",
          width: 75,
          height: 75,
        }}
      />
    </View>
    <Image
      style={{
        width: "100%",
        height: "100%",
        resizeMode: "contain",
      }}
      source={require("../assets/chair.jpg")}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  root: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default ViewImageScreen;
