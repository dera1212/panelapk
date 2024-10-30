import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, Link, useRouter } from "expo-router";
import Carousel from '../carousel';


const TabHome = () => {

  const router = useRouter();

  return (
    <View style={styles.container}>
     <ScrollView>
       <>
       
       <Stack.Screen
            options={{
              headerShown: false, 
              title: "Home"
            }}
        />
        <View style={styles.container1}>
          <Text style={styles.h1}>Hai, <Text style={styles.bold}>Rizal Ahmad</Text></Text>
        </View>
      </>
      <View style={styles.container2}>
          <Image style={styles.LogoDompet}
              source={require("../../assets/images/saldo.png")}
          />
          <View style={styles.TengahAB}>
            <Text style={styles.hSaldoMember}>Saldo member</Text>
            <Text style={[styles.hSaldoMember, styles.bold]}>Rp 1.000.000</Text>
          </View>
      </View>
      <View style={styles.container3}>
          <TouchableOpacity
            style={styles.linkContainer}
            onPress={() => router.push("/informasi")}>
            <Image style={styles.LogoCon3}
              source={require("../../assets/images/profile.png")}
            />
            
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.linkContainer}
            onPress={() => router.push("/informasi")}>
            <Image style={styles.LogoCon3}
              source={require("../../assets/images/isisaldo.png")}
            />
          </TouchableOpacity >
          <TouchableOpacity 
            style={styles.linkContainer}
            onPress={() => router.push("/informasi")}>
            <Image style={styles.LogoCon3}
              source={require("../../assets/images/promo.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.linkContainer}
            onPress={() => router.push("/informasi")}>
            <Image style={styles.LogoCon3}
              source={require("../../assets/images/bantuan.png")}
            />
          </TouchableOpacity>
      </View>
     
     <Carousel />
     <View style={styles.container4}>
      <Text style={styles.TLayananPanel}>Layanan Panel Server</Text>
      <View style={styles.container5}>
      
          <TouchableOpacity
            style={styles.linkContainer2}
            onPress={() => router.push("/informasi")}>
            <Image style={styles.LogoCon3}
              source={require("../../assets/images/instagram.png")}
            />
          <Text style={styles.p}>Instagram</Text>  
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.linkContainer2}
            onPress={() => router.push("/informasi")}>
            <Image style={styles.LogoCon3}
              source={require("../../assets/images/tiktok.png")}
            />
            <Text style={styles.p}>Tiktok</Text>
          </TouchableOpacity >
          <TouchableOpacity 
            style={styles.linkContainer2}
            onPress={() => router.push("/informasi")}>
            <Image style={styles.LogoCon3}
              source={require("../../assets/images/youtube.png")}
            />
            <Text style={styles.p}>Youtube</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.linkContainer2}
            onPress={() => router.push("/informasi")}>
            <Image style={styles.LogoCon3}
              source={require("../../assets/images/twitter.png")}
            />
            <Text style={styles.p}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.linkContainer2}
            onPress={() => router.push("/informasi")}>
            <Image style={styles.LogoCon3}
              source={require("../../assets/images/facebook.png")}
            />
            <Text style={styles.p}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.linkContainer2}
            onPress={() => router.push("/informasi")}>
            <Image style={styles.LogoCon3}
              source={require("../../assets/images/marketplace.png")}
            />
            <Text style={styles.p}>Marketplace</Text>
          </TouchableOpacity>
          
      </View>
     
     </View>
     <View style={styles.container4}>
      <Text style={styles.TLayananPanel}>Layanan Buzzer</Text>
      <View style={styles.container5}>
      
          <TouchableOpacity
            style={styles.linkContainer2}
            onPress={() => router.push("/informasi")}>
            <Image style={styles.LogoCon3}
              source={require("../../assets/images/instagram.png")}
            />
          <Text style={styles.p}>Instagram</Text>  
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.linkContainer2}
            onPress={() => router.push("/informasi")}>
            <Image style={styles.LogoCon3}
              source={require("../../assets/images/tiktok.png")}
            />
            <Text style={styles.p}>Tiktok</Text>
          </TouchableOpacity >
          <TouchableOpacity 
            style={styles.linkContainer2}
            onPress={() => router.push("/informasi")}>
            <Image style={styles.LogoCon3}
              source={require("../../assets/images/youtube.png")}
            />
            <Text style={styles.p}>Youtube</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.linkContainer2}
            onPress={() => router.push("/informasi")}>
            <Image style={styles.LogoCon3}
              source={require("../../assets/images/twitter.png")}
            />
            <Text style={styles.p}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.linkContainer2}
            onPress={() => router.push("/informasi")}>
            <Image style={styles.LogoCon3}
              source={require("../../assets/images/facebook.png")}
            />
            <Text style={styles.p}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.linkContainer2}
            onPress={() => router.push("/informasi")}>
            <Image style={styles.LogoCon3}
              source={require("../../assets/images/marketplace.png")}
            />
            <Text style={styles.p}>Marketplace</Text>
          </TouchableOpacity>
          
      </View>
     
     </View>
     </ScrollView>
      
    </View>
  )
}

export default TabHome

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  container1: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    height: 170,
    marginBottom: -90,
    backgroundColor: "#ff0055",
  },
  container2:{
    width: "90%",
    height: 180,
    marginLeft: "5%",
    marginRight: "5%",
    borderRadius: 15,
    backgroundColor: "white",
    elevation: 5,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    padding: 15,
  },
  container3:{
    width: "100%",
    height: 145,
    flexDirection: 'row',
    gap: 15,
    padding: 25,
    marginTop: -80,
  },
  container4: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: '#ebebeb',
  },
  container5: {
    width: "100%",
    flexDirection: 'row',
    height: 215,
    flex: 1,
    flexWrap: 'wrap',
    padding: 10,
    marginTop: 10,
  },
  TLayananPanel:{
    fontFamily: "sans-serif",
    fontSize: 16,
    color: "#313131",
    fontWeight: 'bold',
    padding: 15,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
  h1:{
    fontFamily: "sans-serif",
    fontSize: 20,
    color: "white",
  },
  bold:{
    fontWeight: "bold",
  },
  LogoDompet:{
    width: 60,
    height: 60,
  },
  LogoCon3:{
    width: 60,
    height: 60,
    margin: "auto",
  },
  TengahAB:{
    justifyContent: "center",
    height: 60,
  },
  hSaldoMember:{
    fontFamily: "sans-serif",
    fontSize: 15,
    color: "#313131",
  },
  linkContainer: {
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: 1,
    height: 10,
  },
  linkContainer2: {
    width: '25%',
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 15,
  },
  p:{
    fontFamily: "sans-serif",
    fontSize: 14,
    color: "#313131",
    marginTop: 5,
  },
});