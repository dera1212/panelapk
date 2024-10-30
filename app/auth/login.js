import React from "react";
import { useRouter, Link, Stack } from "expo-router";
import {
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { Formik, yupToFormErrors } from "formik";
import * as Yup from "yup";

const Login = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Email salah").required("Wajib isi"),
    password: Yup.string().min(6, "Password salah!").required("Wajib isi"),
  });

  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView>
        <>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
          />
          <Text style={styles.h1} type="title">
            Masuk!
          </Text>
          <View style={styles.Pembungkus}>
            <Image
              style={styles.LogoRegis}
              source={require("../../assets/images/foryou-black.png")}
            />
          </View>
          <SafeAreaView>
            <Formik
              initialValues={{
                email: "deraadijaya@gmail.com",
                password: "12345678",
              }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                console.log(values);
                router.push("/(tabs)");
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View style={styles.form}>
                  <Text style={styles.label}> Email </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  {errors.email && touched.email ? (
                    <Text style={styles.errorText}> {errors.email} </Text>
                  ) : null}
                  <Text style={styles.label}> Password </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry
                  />
                  {errors.password && touched.password ? (
                    <Text style={styles.errorText}> {errors.password} </Text>
                  ) : null}
                  <View style={styles.buttonDaftar}>
                    <TouchableOpacity
                      style={styles.link}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.linkColor}> Login </Text>
                    </TouchableOpacity>
                    <Text style={styles.labelLogin}>
                      Belum punya akun?
                      <Link href="/auth/register">
                        <Text style={styles.linkMasuk} type="link"> Daftar sekarang!
                        </Text>
                      </Link>
                    </Text>
                  </View>
                </View>
              )}
            </Formik>
          </SafeAreaView>
        </>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    marginBottom: 16,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  linkColor: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  link: {
    backgroundColor: "#ff0055",
    borderRadius: 5,
    textAlign: "center",
    padding: 10,
  },
  buttonDaftar: {
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    marginLeft: 10,
  },
  h1: {
    fontFamily: "sans-serif",
    fontSize: 25,
    color: "#ff0055",
    textAlign: "center",
    marginTop: 30,
  },
  Pembungkus: {
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  LogoRegis: {
    width: 100,
    height: 35,
  },
  input: {
    fontFamily: "sans-serif",
    fontSize: 14,
    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    borderRadius: 10,
    color: "grey",
    borderColor: "grey",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10.84,
    elevation: 5,
  },
  label: {
    fontFamily: "sans-serif",
    marginLeft: 15,
    marginTop: 5,
    marginBottom: -5,
    fontSize: 14,
    color: "#ff0055",
  },
  labelLogin: {
    fontFamily: "sans-serif",
    marginTop: 5,
    fontSize: 14,
    color: "#737373",
    textAlign: "center",
  },
  linkMasuk: {
    color: "#ff0055",
    fontSize: 14,
    textAlign: "right",
  },
});

export default Login;
