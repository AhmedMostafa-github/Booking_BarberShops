import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Feather, FontAwesome5, Entypo } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

const Input = (props) => {
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.sectionStyle}>
        {(props.icon && (
          <Feather
            name={props.icon}
            size={24}
            color={"black"}
            style={[styles.imageStyle, props.style]}
          />
        )) || (
          <FontAwesome5
            name={props.icon}
            size={24}
            color={"black"}
            style={[styles.imageStyle, props.style]}
          />
        )}
        <TextInput {...props} style={[styles.input, props.style]} />
        {props.pass && (
          <TouchableOpacity onPress={props.onPress}>
            <Entypo
              name={props.pass}
              size={24}
              color={"gray"}
              style={[styles.imageStyle, props.design]}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: "100%",
    alignItems: "center",
  },
  label: {
    fontFamily: "Luckiest Guy",
    marginVertical: 8,
    alignSelf: "flex-start",
    paddingHorizontal: 40,
    paddingTop: 5,
    color: "#fffafa",
  },
  input: {
    paddingHorizontal: 7,
    paddingVertical: Platform.OS === "android" ? 5 : 13,
    flex: 1,
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    right: 26,
    marginLeft: 35,
    borderColor: Colors.accent,
    borderWidth: 2,
    borderRadius: 5,
    width: "75%",
    paddingLeft: 7,
  },
  imageStyle: {
    alignSelf: "center",
  },
});

export default Input;
