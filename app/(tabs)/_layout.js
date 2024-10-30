import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function RootLayout() {

  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: '#ff0055',
        }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarStyle: {
            backgroundColor: 'white',
            paddingTop: 5,
            paddingBottom: 5,
            
          },
          headerShown: false, title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="home" color={color} />
          ),
        }}
      />
      

      <Tabs.Screen
        name="transaksi"
        options={{
        headerShown: false,
          tabBarStyle: {
            backgroundColor: 'white',
            paddingTop: 5,
            paddingBottom: 5,
          },
          title: "Transaksi",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={20} name="file-invoice" color={color} />
          ),
        }}
      />

    <Tabs.Screen
        name="saldo"
        options={{
          tabBarStyle: {
            backgroundColor: 'white',
            paddingTop: 5,
            paddingBottom: 5,
          },
        headerShown: false,
          title: "Saldo",
          tabBarIcon: ({ color }) => (
            <Entypo style={styles.navTengah} name="wallet" color={color} />
          ),
        }}
      />

    <Tabs.Screen
        name="informasi"
        options={{
          tabBarStyle: {
            backgroundColor: 'white',
            paddingTop: 5,
            paddingBottom: 5,
          },
        headerShown: false,
          title: "Informasi",
          tabBarIcon: ({ color }) => (
            <Ionicons size={20} name="notifications" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarStyle: {
            backgroundColor: 'white',
            paddingTop: 5,
            paddingBottom: 5,
          },
        headerShown: false,
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  navTengah:{
    fontSize: 20,
    marginTop: -35,
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 15,
  },
  tabBarStyle: {
    backgroundColor: 'black',
    paddingTop: 5,
    paddingBottom: 5,
  },
});