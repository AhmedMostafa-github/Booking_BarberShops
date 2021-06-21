import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ErrorMessage = (props) => {
  if (!props.visible || !props.error) return null;

  return (
    <View>
      <Text style={styles.errorsMsg}>{props.error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorsMsg: {
    color: "#FF2400",
    textAlign: "left",
    paddingLeft: 45,
  },
});

export default ErrorMessage;
