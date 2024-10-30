import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
  } from "react-native";
  import React from "react";
  import { useRouter, Stack, Link } from "expo-router";
  import { Video, ResizeMode } from "expo-av";
  import { Appearance, useColorScheme } from 'react-native';

  
  const Home = () => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const router = useRouter();
    return (
      <View style={styles.container}>
        <>
        <Stack.Screen options={{ headerShown: false }} />
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://res.cloudinary.com/dhwupzo3c/video/upload/f_auto:video,q_auto/v1/aplikasi%20react%20native%20panel%20sosmed/tlpro03lonjgriuqgf2w",
          }}
          resizeMode={ResizeMode.COVER}
          shouldPlay
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        ></Video>
        <View style={styles.Pembungkus}>
          <Image
            style={styles.LogoAwal}
            source={require('../assets/images/foryou.png')}
          />
        </View>
        <View style={styles.PembungkusButton}>
          <TouchableOpacity style={styles.link}
            onPress={() => router.push("auth/register")}
          >
            <Text style={styles.linkColor} type="link">Daftar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}
            onPress={() => router.push("auth/login")}
          >
            <Text style={styles.linkColor} type="link">Login</Text>
          </TouchableOpacity>
        </View>
        </>
      </View>
    );
  };
  
  export default Home;
  
  const styles = StyleSheet.create({
    linkColor: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
      },
      link: {
        backgroundColor: '#ff0055',
        borderRadius: 25,
        padding: 10,
        width: '50%',
        marginTop: 10,
      },
      PembungkusButton: {
        width: '100%',
        flexDirection: 'row',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        gap: 15,
        padding: 20,
      },
      LogoAwal: {
        width: 160,
        height: 70,
      },
      Pembungkus: {
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 150,
      },
    
      container: {
        flex: 1,
        justifyContent: "center",
      },
      video: {
        ...StyleSheet.absoluteFillObject,
      },
      overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
      mainText: {
        color: "white",
        fontSize: 68,
        fontWeight: "bold",
        textAlign: "center",
      },
      subText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
      },
      tagline: {
        color: "white",
        fontSize: 18,
        fontStyle: "italic",
        textAlign: "center",
        marginTop: 10,
      },
      buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        position: "absolute",
        bottom: 30,
        left: 0,
        right: 0,
      },
      button: {
        backgroundColor: "#6200ea",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        elevation: 3, // Adds a shadow effect on Android
      },
      buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
      },
  });