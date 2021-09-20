import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "sans-serif",
    fontSize: 18,
    textDecorationLine: "underline",
    fontStyle: "italic",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
export default AppText;
