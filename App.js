import React from "react";
import { StyleSheet } from "react-native";

import DetailsScreen from "./app/screen/DetailsScreen";
import AppCard from "./app/components/AppCard";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import ListItem from "./app/components/ListItem";

function App(props) {
  return (
    <DetailsScreen
      image={require("./app/assets/jacket.jpg")}
      title="Red jacket for sale"
      subTitle="$100"
    />
    // <AppCard
    //   image={require("./app/assets/jacket.jpg")}
    //   title="Red jacket for sale"
    //   subTitle="$100"
    // />
    // <ViewImageScreen />
    // <WelcomeScreen />
  );
}

export default App;
