import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Switch,
  Dimensions,
  Platform,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Colors from "../../constants/Colors";
import Input from "../../components/UI/Input";
import ErrorMessage from "../../components/UI/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const auth = () => {
  const [remember, setRemember] = useState(false);
  const [secure, setSecure] = useState(true);
  return (
    <KeyboardAvoidingView
      behavior="height"
      style={{ flex: 1, backgroundColor: Colors.accent }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />
      <ScrollView>
        <View style={styles.header}>
          <Image
            style={{
              borderBottomLeftRadius: 75,
              overflow: "hidden",
              height: "100%",
            }}
            source={require("../../assets/Images/b1.jpg")}
          />
        </View>
        <View>
          <Image
            style={{ overflow: "hidden", ...StyleSheet.absoluteFillObject }}
            source={require("../../assets/Images/b1.jpg")}
          />
        </View>
        <View style={styles.body}>
          <Text style={styles.titletBody}>Welcome Back</Text>
          <Text style={styles.subTitletBody}>
            Use your credentials below and login to your account
          </Text>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            {({
              handleSubmit,
              handleChange,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <>
                <Input
                  label="E-Mail"
                  icon="mail"
                  keyboardType="email-address"
                  required
                  email
                  autoCapitalize="none"
                  placeholder="Enter Your Email-address"
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                />
                {<ErrorMessage error={errors.email} visible={touched.email} />}
                <Input
                  label="Password"
                  icon="lock"
                  keyboardType="default"
                  secureTextEntry={secure}
                  onPress={() => setSecure((prev) => !prev)}
                  pass={secure ? "eye" : "eye-with-line"}
                  design={{ paddingRight: 10 }}
                  required
                  minLength={5}
                  autoCapitalize="none"
                  placeholder="Enter Your Password"
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                />

                {
                  <ErrorMessage
                    error={errors.password}
                    visible={touched.password}
                  />
                }
                <View
                  style={{
                    flexDirection: "row",
                    paddingTop: 22,
                    justifyContent: "space-between",
                  }}
                >
                  <View style={styles.check}>
                    <Switch
                      value={remember}
                      onValueChange={(newValue) => setRemember(newValue)}
                    />
                    <Text
                      style={{
                        paddingTop: Platform.OS === "android" ? 3 : 7,
                        fontWeight: "bold",
                        color: "black",
                        paddingLeft: Platform.OS === "android" ? 0 : 8,
                      }}
                    >
                      Remember me
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <Text
                      style={{
                        paddingTop: Platform.OS === "android" ? 2 : 7,
                        paddingRight: 40,
                        color: "gold",
                      }}
                    >
                      Forgot password
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleSubmit}>
                  <Text style={styles.logButton}>Log into your account</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
        <View style={styles.footer}>
          <View style={styles.logos}>
            <TouchableOpacity>
              <Image
                style={styles.logo}
                source={require("../../assets/Images/facebook.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.logo}
                source={require("../../assets/Images/google.png")}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{ flexDirection: "row", marginTop: 23, alignSelf: "center" }}
          >
            <Text>Don't have an account?</Text>
            <TouchableOpacity>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                {" "}
                Sign Up here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent,
  },
  header: {
    height: Dimensions.get("window").height * 0.18,
    backgroundColor: Colors.third,
  },
  body: {
    height: Dimensions.get("window").height * 0.62,
    backgroundColor: Colors.third,
    borderBottomRightRadius: 75,
    borderBottomLeftRadius: 75,
    borderTopRightRadius: 75,
  },
  titletBody: {
    textAlign: "center",
    fontSize: 28,
    color: "gold",
    paddingTop: 35,
    fontFamily: "Luckiest Guy",
  },
  subTitletBody: {
    alignSelf: "center",
    width: "62%",
    textAlign: "center",
    paddingTop: 8,
    color: "white",
  },
  check: {
    flexDirection: "row",
    paddingLeft: 30,
  },
  logButton: {
    alignSelf: "center",
    marginTop: 20,
    borderWidth: 4,
    borderRadius: 25,
    width: "65%",
    height: "32%",
    textAlign: "center",
    paddingTop: 16,
    backgroundColor: "black",
    color: "gold",
    fontWeight: "bold",
    fontSize: 15,
    overflow: "hidden",
  },
  footer: {
    // height: Dimensions.get("window").height * 0.14,
    backgroundColor: Colors.accent,
  },
  logos: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "30%",
    alignSelf: "center",
    marginTop: 14,
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default auth;
