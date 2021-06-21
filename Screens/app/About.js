import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/Colors";

const About = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "black",
        flex: 1,
      }}
    >
      <Text style={styles.title}>Why Choose Us!</Text>
      <Text style={styles.dis}>
        I did study the art of being a barber because I wanted to figure out
        what my routine would be. Do you start in the front or back? Top or
        bottom? Swivel the chair or walk around? What I did discover is there's
        no such thing as the perfect haircut!
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Luckiest Guy",
    color: Colors.accent,
    fontSize: 25,
    left: 10,
    paddingVertical: 10,
  },
  dis: {
    color: Colors.fav,
    width: "95%",
    alignSelf: "center",
    fontSize: 16,
    height: Dimensions.get("window").height * 0.33,
  },
});

export default About;
