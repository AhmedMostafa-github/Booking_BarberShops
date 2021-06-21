import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

const skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 30 }} {...props}>
    <Text style={styles.text}>Skip...</Text>
  </TouchableOpacity>
);

const next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 30 }} {...props}>
    <Ionicons name="arrow-redo" size={30} color="black" />
  </TouchableOpacity>
);

const dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? Colors.primary : "black";
  return (
    <View
      style={{ width: 5, height: 5, marginHorizontal: 3, backgroundColor }}
    />
  );
};

const done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 30 }} {...props}>
    <FontAwesome name="scissors" size={30} color="black" />
  </TouchableOpacity>
);

const onBording = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <Onboarding
        imageContainerStyles={styles.container}
        titleStyles={styles.title}
        SkipButtonComponent={skip}
        NextButtonComponent={next}
        DotComponent={dots}
        DoneButtonComponent={done}
        pages={[
          {
            backgroundColor: Colors.accent,
            image: (
              <Image
                style={styles.image}
                source={require("../../assets/Images/o3.png")}
              />
            ),
            title: "Men's haircut.",
            subtitle: "Barbershop is not a hobby, it's a lifestyle.",
          },
          {
            backgroundColor: Colors.accent,
            image: (
              <Image
                style={styles.image}
                source={require("../../assets/Images/o4.png")}
              />
            ),
            title: "Nice and Easy",
            subtitle:
              "You might be a redneck if you need an estimate from your barber before you get a haircut.",
          },
          {
            backgroundColor: Colors.accent,
            image: (
              <Image
                style={styles.image}
                source={require("../../assets/Images/o1.png")}
              />
            ),
            title: "All for you..",
            subtitle: "You don't ever ask a barber whether you need a haircut.",
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 450,
    height: 400,
    aspectRatio: 1 * 1.4,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    top: -40,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default onBording;
