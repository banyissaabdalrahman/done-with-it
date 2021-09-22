import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/ListItem";
function DetailsScreen({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={image} />
      <View style={styles.textView}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <ListItem
        image={require("../assets/profilepic.jpg")}
        title="Abdalrhman Banyissa"
        subTitle="5 Listing"
      />
      <ListItem
        image={require("../assets/mosh.jpg")}
        title="Mosh Hamadani"
        subTitle="3 Listing"
      />
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
});

export default DetailsScreen;
