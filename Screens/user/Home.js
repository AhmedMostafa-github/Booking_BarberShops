import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

import ShopItem from "../../components/shop/shopItem";
import Colors from "../../constants/Colors";

const Home = (props) => {
  const avilableShops = useSelector((state) => state.shops.shops);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const selectItemHandler = (id, name) => {
    props.navigation.push("shopOverView", {
      shopId: id,
      shopName: name,
    });
  };

  const updateSearch = (search) => {
    setSearch(search);
    let filter = avilableShops.filter((item) =>
      item.name.toLowerCase().match(search)
    );
    setSearchResult(filter);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <LinearGradient colors={["black", "gold"]} style={styles.gradient}>
            <Image
              style={{
                height: "100%",
                width: "100%",
                resizeMode: "cover",
                opacity: 0.75,
              }}
              source={{
                uri: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-1813272.jpg&fm=jpg",
              }}
            />
          </LinearGradient>
          <View style={styles.search}>
            <SearchBar
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="name"
              value={search}
              onChangeText={updateSearch}
              placeholder="Search Barber Shop.."
              containerStyle={{
                backgroundColor: Colors.third,
                borderWidth: 0,
                borderRadius: 25,
              }}
              inputStyle={{ backgroundColor: Colors.third }}
              inputContainerStyle={{ backgroundColor: Colors.third }}
            />
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            data={searchResult.length == 0 ? avilableShops : searchResult}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item) => {
              return (
                <ShopItem
                  item={item.item}
                  onSelect={() => {
                    selectItemHandler(item.item.id, item.item.name);
                  }}
                />
              );
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    height: Dimensions.get("window").height * 0.28,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  gradient: {
    height: Dimensions.get("window").height * 0.28,
    position: "absolute",
    top: 0,
    width: Dimensions.get("window").width,
  },
  search: {
    height: "20%",
    width: "70%",
    backgroundColor: Colors.third,
    justifyContent: "center",
    alignContent: "center",
    top: 40,
    overflow: "hidden",
    borderRadius: 25,
  },
  body: {
    backgroundColor: "black",
    height: Dimensions.get("window").height * 0.62,
    paddingHorizontal: 18,
  },
});

export default Home;
