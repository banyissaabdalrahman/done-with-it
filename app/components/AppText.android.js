import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../config/colors";
function AppText({
  children,
  appTextFontSize = 18,
  appTextFontColor = "black",
  appTextFontWeight = "bold",
  appTextFontTransform = "capitalize",
}) {
  return (
    <Text
      style={[
        styles.text,
        {
          fontSize: appTextFontSize,
          fontWeight: appTextFontWeight,
          textTransform: appTextFontTransform,
          color: appTextFontColor,
        },
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "sans-serif",
  },
});
export default AppText;
