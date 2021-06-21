import React, { useState } from "react";
import { Image, StyleSheet, View, Text, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "../Screens/user/Home";
import Profile from "../Screens/user/Profile";
import Order from "../Screens/user/Order";
import shopOverView from "../Screens/app/shopOverView";
import About from "../Screens/app/About";
import Gallery from "../Screens/app/Gallery";
import Service from "../Screens/app/Service";
import Review from "../Screens/app/Review";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();
const TabBot = createBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: "black",
  },
  headerTintColor: "#fffafa",
  headerTitleStyle: {
    fontFamily: "Luckiest Guy",
  },
};
const ShopStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="Home"
        component={ShopTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="shopOverView"
        component={shopOverView}
        options={({ route }) => ({
          title: route.params.shopName,
        })}
      />
    </Stack.Navigator>
  );
};

const ShopTab = () => {
  return (
    <TabBot.Navigator
      initialRouteName={"Home"}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          borderRadius: 20,
          bottom: 12,
          left: 20,
          right: 20,
          height: 75,
          position: "absolute",
          elevation: 0,
          backgroundColor: Colors.accent,
          ...styles.shadow,
        },
      }}
    >
      <TabBot.Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/Images/order.jpg")}
                resizeMode="contain"
                style={{
                  width: !focused ? 45 : 60,
                  height: 55,
                  borderRadius: 900,
                  top: 3,
                }}
              />
              <Text
                style={{
                  color: focused ? "gold" : "black",
                  fontSize: !focused ? 12 : 15,
                }}
              >
                Order
              </Text>
            </View>
          ),
        }}
      />
      <TabBot.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/Images/home.jpg")}
                resizeMode="contain"
                style={{
                  width: !focused ? 40 : 55,
                  height: 55,
                  borderRadius: 900,
                  top: 3,
                }}
              />
              <Text
                style={{
                  color: focused ? "gold" : "black",
                  fontSize: !focused ? 12 : 15,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <TabBot.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/Images/profile.jpg")}
                resizeMode="contain"
                style={{
                  width: !focused ? 45 : 60,
                  height: 55,
                  borderRadius: 900,
                  top: 3,
                }}
              />
              <Text
                style={{
                  color: focused ? "gold" : "black",
                  fontSize: !focused ? 12 : 15,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </TabBot.Navigator>
  );
};

const DefaultScreen = () => (
  <View style={{ flex: 1, backgroundColor: "black" }} />
);

export const ShopTop = () => {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <TabTop.Navigator
      tabBarOptions={{
        style: { backgroundColor: "black" },
        activeTintColor: Colors.fav,
        inactiveTintColor: Colors.third,
        indicatorStyle: { backgroundColor: Colors.fav },
      }}
    >
      <TabTop.Screen
        name="About"
        component={activeTab === "About" ? About : DefaultScreen}
        listeners={{ focus: () => setActiveTab("About") }}
      />
      <TabTop.Screen
        name="Service"
        component={activeTab === "Service" ? Service : DefaultScreen}
        listeners={{ focus: () => setActiveTab("Service") }}
      />
      <TabTop.Screen
        name="Gallery"
        component={activeTab === "Gallery" ? Gallery : DefaultScreen}
        listeners={{ focus: () => setActiveTab("Gallery") }}
      />
      <TabTop.Screen
        name="Review"
        component={activeTab === "Review" ? Review : DefaultScreen}
        listeners={{ focus: () => setActiveTab("Review") }}
      />
    </TabTop.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <ShopStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default AppNavigator;
