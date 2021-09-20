import React from "react";
import { StyleSheet, View, Image, Platform, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
const ViewImageScreen = () => (
  <View style={styles.root}>
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View>
        <MaterialCommunityIcons
          style={styles.icon}
          name="close"
          size={50}
          color={colors.white}
        />
      </View>
      <View>
        <MaterialCommunityIcons
          style={styles.icon}
          name="trash-can-outline"
          size={50}
          color={colors.white}
        />
      </View>
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
    paddingLeft: 20,
    paddingRight: 20,
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
  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ViewImageScreen;
