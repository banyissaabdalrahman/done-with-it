import React from "react";
import {
  StatusBar,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

const WelcomeScreen = () => (
  <View style={styles.container}>
    <StatusBar barStyle={"light-content"} />
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.bgImage}
    >
      <Image
        style={styles.image}
        source={require("../assets/logo-red.png")}
      ></Image>
      <Text style={styles.text}>Sell What You Don't Need</Text>
    </ImageBackground>
    <View
      style={{
        backgroundColor: "#fc5c65",
        width: "100%",
        height: 70,
      }}
    />
    <View
      style={{
        backgroundColor: "#4ECDC4",
        width: "100%",
        height: 70,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default WelcomeScreen;
