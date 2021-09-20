import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Avenir",
    fontSize: 20,
    textDecorationLine: "line-through",
    fontStyle: "italic",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
export default AppText;
