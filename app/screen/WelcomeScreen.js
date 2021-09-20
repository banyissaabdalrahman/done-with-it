import React from "react";
import {
  StatusBar,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

import AppButton from "../components/AppButton";

const WelcomeScreen = () => (
  <View style={styles.container}>
    <StatusBar barStyle={"light-content"} />
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.bgImage}
      blurRadius={3}
    >
      <Image
        style={styles.logo}
        source={require("../assets/logo-red.png")}
      ></Image>
      <Text style={styles.text}>Sell What You Don't Need</Text>
      <View style={styles.buttons}>
        <AppButton title="register" buttonColor="secondary" />
        <AppButton title="login" />
      </View>
    </ImageBackground>
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  buttons: {
    width: "100%",
    flex: 1,
    flexDirection: "column-reverse",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
