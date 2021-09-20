import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import colors from "../config/colors";
function DetailsScreen({
  image,
  title,
  subTitle,
  dealerPhoto,
  dName,
  iQuantity,
}) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={image} />
      <View style={styles.textView}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <View style={styles.dealerInformationContainer}>
        <Image style={styles.dealer} source={dealerPhoto} />
        <View style={styles.dealerInformation}>
          <Text style={styles.dealerName}>{dName}</Text>
          <Text style={styles.itemsQuantity}>{iQuantity}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: "100%",
    height: 300,
  },
  textView: {
    backgroundColor: "#fff",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 24,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 24,
  },
  dealer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    left: 20,
  },
  dealerInformationContainer: {
    flexDirection: "row",
  },
  dealerInformation: {
    left: 30,
    justifyContent: "center",
  },
  dealerName: {
    fontSize: 18,
  },
  itemsQuantity: {
    fontSize: 16,
    color: colors.medium,
  },
});

export default DetailsScreen;
