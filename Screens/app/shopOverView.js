import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";

import Icon from "../../components/shop/Icon";
import Colors from "../../constants/Colors";
import { ShopTop } from "../../navigation/AppNavigator";

const shopOverView = (props) => {
  const shoptId = props.route.params.shopId;
  const selectedShop = useSelector((state) =>
    state.shops.shops.find((sho) => sho.id === shoptId)
  );

  const lat = selectedShop.lati;
  const lon = selectedShop.long;

  return (
    <ScrollView
      style={{
        backgroundColor: "black",
      }}
    >
      <View style={styles.header}>
        <ImageBackground
          source={{ uri: selectedShop.imageUrl }}
          style={styles.imageBack}
        >
          <Text style={styles.shopName}>{selectedShop.name}</Text>
          <Text style={styles.shopAddress}>{selectedShop.address}</Text>
        </ImageBackground>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Icon
          icon={<MaterialCommunityIcons name="web" size={35} color="#fffafa" />}
          title={"Our Page"}
          style={styles.icon}
          onPress={"openPage"}
          page={selectedShop.Page}
        />
        <Icon
          icon={<Feather name="phone-call" size={35} color="#fffafa" />}
          title={"Call Now"}
          style={styles.icon}
          onPress={"makeCall"}
          call={selectedShop.Phone}
        />
        <Icon
          icon={<Entypo name="location" size={35} color="#fffafa" />}
          title={"Location"}
          style={styles.icon}
          onPress={"Location"}
          name={selectedShop.name}
          lati={lat}
          long={lon}
          id={selectedShop.id}
          go={selectedShop.location}
        />
        <Icon
          icon={<AntDesign name="sharealt" size={35} color="#fffafa" />}
          title={"Share"}
          onPress={"Share"}
          style={styles.icon}
          page={selectedShop.Page}
          name={selectedShop.name}
          num={selectedShop.Phone}
        />
      </View>
      <View style={styles.line} />
      <ShopTop />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: Dimensions.get("window").height * 0.31,
    marginBottom: 7,
  },
  imageBack: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  shopName: {
    fontSize: 20,
    color: "gold",
    fontWeight: "bold",
    paddingLeft: 15,
    borderRadius: 20,
    backgroundColor: "black",
    opacity: 0.7,
    width: "50%",
    overflow: "hidden",
  },
  shopAddress: {
    fontSize: 12,
    color: "gold",
    width: "50%",
    fontWeight: "bold",
    borderRadius: 20,
    backgroundColor: "black",
    opacity: 0.7,
    paddingLeft: 12,
    overflow: "hidden",
  },
  line: {
    borderColor: Colors.primary,
    width: "75%",
    borderBottomWidth: 0.4,
    alignSelf: "center",
    marginVertical: 8,
  },
});

export default shopOverView;
