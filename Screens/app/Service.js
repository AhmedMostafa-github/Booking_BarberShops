import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import Colors from "../../constants/Colors";

const Service = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "black",
        flex: 1,
        paddingVertical: 15,
      }}
    >
      <TouchableOpacity style={{ flexDirection: "row" }}>
        <View style={styles.imageCont}>
          <Image
            style={styles.image}
            source={{
              uri: "https://2x1dks3q6aoj44bz1r1tr92f-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/A-Man-Getting-Beard-Trim-At-Barber-Shop-July-2017.jpg",
            }}
          />
        </View>
        <View
          style={{ width: "70%", paddingLeft: 25, justifyContent: "center" }}
        >
          <Text style={styles.title}>Hair Cut</Text>
          <Text style={styles.des}>Life is too short to have boring hair.</Text>
          <Text style={styles.price}>$8</Text>
        </View>
      </TouchableOpacity>
      <View style={{ height: Dimensions.get("window").height * 0.2 }}>
        <TouchableOpacity onPress={() => console.log("Dawly")}>
          <Text style={styles.button}>Select</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageCont: {
    width: "30%",
    height: 120,
    justifyContent: "center",
    borderRadius: 35,
    left: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 35,
  },
  title: {
    color: Colors.accent,
    fontFamily: "Luckiest Guy",
    fontSize: 20,
    paddingVertical: 7,
    bottom: 5,
  },
  des: {
    color: Colors.accent,
  },
  price: {
    color: Colors.accent,
    fontWeight: "bold",
    top: 3,
    fontSize: 17,
  },
  button: {
    borderRadius: 20,
    backgroundColor: Colors.primary,
    width: "35%",
    height: 45,
    overflow: "hidden",
    alignSelf: "center",
    textAlign: "center",
    paddingTop: 13,
    // top: 60,
  },
});

export default Service;
