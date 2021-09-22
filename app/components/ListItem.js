import React from "react";
import { Image, View, StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../config/colors";

import AppText from "./AppText";
function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.listItemContainer}>
      <Image style={styles.img} source={image} />
      <View style={styles.textContainer}>
        <AppText>{title}</AppText>
        <AppText appTextFontColor={colors.medium}>{subTitle}</AppText>
      </View>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  textContainer: {
    left: 10,
  },
  img: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
  },
  listItemContainer: {
    flexDirection: "row",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
    left: 20,
  },
});
