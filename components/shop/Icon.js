import React, { useState } from "react";
import {
  Linking,
  Text,
  StyleSheet,
  TouchableOpacity,
  Share,
  Modal,
  View,
  Dimensions,
  Image,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

const Icon = (props) => {
  var mapStyle = require("../../JSONS/mapStyle.json");
  const [mangeModal, setMangeModal] = useState(false);
  const mange = props.onPress;

  const makeCall = () => {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      phoneNumber = `tel:${props.call}`;
    } else {
      phoneNumber = `telprompt:${props.call}`;
    }

    Linking.openURL(phoneNumber);
  };

  const openPage = () => {
    Linking.openURL(props.page);
  };

  const go = () => {
    Linking.openURL(props.go);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `This is my Favorite Barber shop you should try it! \n ${props.page} \n ${props.name}: ${props.num}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const choiceHandler = (mange) => {
    switch (mange) {
      case "openPage":
        return openPage();
      case "makeCall":
        return makeCall();
      case "Location":
        return setMangeModal(true);
      case "Share":
        return onShare();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: "flex-end", top: 0, borderWidth: 2 }}>
        <Modal visible={mangeModal} animationType="slide" transparent={true}>
          <View style={styles.modal}>
            <TouchableOpacity
              style={{
                alignSelf: "flex-start",
                bottom: 25,
                right: 20,
                flexDirection: "row",
              }}
              onPress={() => setMangeModal(false)}
            >
              <FontAwesome
                name="hand-scissors-o"
                size={30}
                color={Colors.primary}
              />
              <Text
                style={{
                  top: 6,
                  left: 3,
                  fontWeight: "bold",
                  fontSize: 15,
                  color: Colors.primary,
                }}
              >
                Close
              </Text>
            </TouchableOpacity>
            <View
              style={{
                overflow: "hidden",
                borderBottomRightRadius: 75,
                borderBottomLeftRadius: 7,
                borderTopLeftRadius: 75,
                borderTopRightRadius: 7,
                bottom: 8,
              }}
            >
              <MapView
                onMarkerPress={() => go()}
                provider={PROVIDER_GOOGLE}
                customMapStyle={mapStyle}
                style={styles.map}
                initialRegion={{
                  latitude: props.lati,
                  longitude: props.long,
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.01,
                }}
              >
                <MapView.Marker
                  coordinate={{
                    latitude: props.lati,
                    longitude: props.long,
                  }}
                  title={props.name}
                  description={"Welcome"}
                >
                  <Image
                    source={require("../../assets/Images/marker.png")}
                    style={{ width: 50, height: 50 }}
                  />
                </MapView.Marker>
              </MapView>
            </View>
          </View>
        </Modal>
      </View>
      <TouchableOpacity
        style={styles.iconCont}
        onPress={() => choiceHandler(mange)}
        activeOpacity={0.7}
      >
        {props.icon}
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconCont: {
    // flex: 1,
    alignItems: "center",
  },
  text: {
    color: "#fffafa",
    fontFamily: "Luckiest Guy",
    fontSize: 17,
    paddingTop: 7,
  },
  modal: {
    top: 90,
    margin: 20,
    backgroundColor: Colors.third,
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 7,
    borderTopRightRadius: 75,
    borderTopLeftRadius: 7,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  map: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 1,
  },
});

export default Icon;
