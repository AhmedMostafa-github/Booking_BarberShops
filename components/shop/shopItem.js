import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../../constants/Colors";

const shopItem = (props) => {
  return (
    <View style={styles.flat}>
      <TouchableOpacity
        style={{
          width: "100%",
          height: 170,
          flexDirection: "row",
        }}
        onPress={props.onSelect}
      >
        <View style={styles.imageCont}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
              borderRadius: 35,
            }}
            source={{ uri: props.item.imageUrl }}
          />
        </View>
        <View style={styles.deatCont}>
          <Text
            style={{
              fontFamily: "Luckiest Guy",
              fontSize: 18,
              color: "#fffafa",
              bottom: 10,
            }}
          >
            {props.item.name}
          </Text>
          <Text
            style={{
              color: "gray",
              fontSize: 13,
            }}
          >
            {props.item.address}
          </Text>
          <Text style={{ color: "gold", top: 5 }}>{props.item.time}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  flat: {
    width: "100%",
    height: 185,
    borderBottomWidth: 0.8,
    borderColor: Colors.accent,
    flexDirection: "row",
  },
  imageCont: {
    width: "45%",
    height: "95%",
    justifyContent: "center",
    borderRadius: 35,
  },
  deatCont: {
    width: "55%",
    justifyContent: "center",
    paddingLeft: 7,
  },
});

export default shopItem;
