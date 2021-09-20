import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import colors from "../config/colors";
function AppCard({ image, title, subTitle }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardBody}>
        <Image source={image} style={styles.imageStyle} />
        <View style={styles.textView}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardSubTitle}>{subTitle}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    flex: 0.5,
    backgroundColor: "#f8f4f4",
  },
  cardBody: {
    margin: 25,
    top: 50,
  },
  imageStyle: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textView: {
    backgroundColor: "#fff",
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardTitle: {
    marginBottom: 10,
  },
  cardSubTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default AppCard;
