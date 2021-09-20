import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import colors from "../config/colors";
function AppButton({
  title,
  buttonColor = "primary",
  fontColor = colors.white,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[buttonColor] }]}
    >
      <Text style={[styles.text, , { color: fontColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginBottom: 20,
  },
  text: { fontSize: 18, fontWeight: "bold", textTransform: "uppercase" },
});
export default AppButton;
