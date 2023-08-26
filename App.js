import { TextInput } from "react-native";
import { ImageBackground } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { useState } from "react";

import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
const [showpassword,setshowpassword]= useState(true);
const [showpassword1,setshowpassword1]= useState(true);
  return (
    <View style={maindeco.container}>
      <ImageBackground
        style={maindeco.container}
        source={require('./assets/background.jpg')}>
        <View style={maindeco.lowercontainer}>
          <Text style={maindeco.uppertext}>
            Sign Up
          </Text>
          <View style={maindeco.out}>
            <AntDesign name="user" size={24} color= "#FF7932" position="absolute" marginLeft={11} marginTop={15} />

            <TextInput
              style={maindeco.innertext}
              placeholder='Enter email'
            />
          </View>
          <View style={maindeco.out}>
            <AntDesign name="lock" size={24} color="#FF7932" position="absolute" marginLeft={11} marginTop={15} />
            <TextInput
              style={maindeco.innertext}
              placeholder='Enter Password'
              secureTextEntry={showpassword}

            ></TextInput>
            <FontAwesome5 name={showpassword === false ? "eye" : "eye-slash"} size={24} color= "black" position="absolute" marginLeft={200} marginTop={15}
            onPress={()=>setshowpassword(!showpassword)} /></View>
          <View style={maindeco.out}>
            <AntDesign name="lock" size={24} color="#FF7932" position="absolute" marginLeft={11} marginTop={15} />
            <TextInput
              style={maindeco.innertext}
              placeholder='Re-Enter Password'
              secureTextEntry={showpassword1}

            ></TextInput>
            <FontAwesome5 name={showpassword1 === false ? "eye" : "eye-slash"} size={24} color="black" position="absolute" marginLeft={200} marginTop={15} onPress={()=>setshowpassword1(!showpassword1)}/></View>
          <View style={maindeco.lowerout}>
            <TouchableOpacity>
              <Text style={maindeco.lowertext}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={maindeco.up}>
            <Text style={{ fontSize: 15, marginTop: -30, marginLeft: 40 }}>Already have an Account?</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 15, color: "#FCA542", marginTop: -30 }}>{"\tLog In"}</Text>
            </TouchableOpacity>
          </View>
        </View>



      </ImageBackground>
    </View>
  );
}

const maindeco = StyleSheet.create(
  {
    container: {
      flex: 1,
      position:"absolute",
      height:"100%",
      width:"100%",
    },
    lowercontainer: {
      flex: 0.7,
      marginBottom: -250,
      backgroundColor: "white",
      marginTop: 175,
      width: "100%",
      borderRadius: 80,
      marginLeft: 50,
    },
    uppertext: {
      fontSize: 30,
      color: "#FCA542",
      marginLeft: 100,
      marginTop: 15,
      fontWeight: "700"
    },
    out: {
      height: 50,
      width: 250,


      marginLeft: 30,
      marginTop: 20,
      borderRadius: 10,
      borderWidth: 1,
    },
    innertext: {
      marginLeft: 30,
      padding: 15,
      color: "black",
      borderRadius: 10,
    },
    lowerout: {
      height: 50,
      width: 250,
      backgroundColor: "#FF7932",
      marginVertical: 50,
      elevation: 5,
      borderRadius: 7,
      marginLeft: 26,
    },
    lowertext: {
      fontSize: 20,
      textAlign: "center",
      fontWeight: "700",
      color: "white",
      padding: 10,
    },
    up: {
      flexDirection: "row",
    }
  }
)