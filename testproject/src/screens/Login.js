import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import Axios from 'axios'

import Images from '../assets'

export default function Login({navigation}){

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const login = () => {
    if(email.length && pass.length){
      Axios.get(`http://localhost:3000/users/login/${email}/${pass}`).then(({data})=>{
        console.log("logged in");
      }).catch((err)=>{
        console.log('err', err);
      })
    }
  }

  return(
    <SafeAreaView style={[styles.container, {backgroundColor: "grey"}]}>
        <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={0} contentContainerStyle={[styles.container]} enabled={Platform.OS === "ios" ? true : false}>
      <View style={[styles.container]}>
        <Image source={Images.icon} resizeMode="contain" style={{width: 100, height: 100, marginLeft: 28}}/>
      </View>
      <View style={[styles.container, {flex: .7, justifyContent: "space-evenly", padding: 20}]}>
        <TextInput style={styles.ti} placeholder="email" placeholderTextColor="black"  onChangeText={(change)=>setEmail(change)}/>
        <TextInput style={styles.ti} placeholder="password" placeholderTextColor="black"  onChangeText={(change)=>setPass(change)}/>
      </View>
      <View style={{flex: .4, width: "100%", justifyContent: "center", alignItems: "center", padding: 20}}>
        <TouchableOpacity onPress={login} style={{height: 60, width: "90%", margin: 5, justifyContent: "center", alignItems: "center", borderWidth: 2, borderColor: "black", backgroundColor: "green", borderRadius: 10}}>
            <Text>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.container, {flex: .25, justifyContent: "flex-start", padding: 20}]}>
        <TouchableOpacity onPress={()=>navigation.navigate("signup")}>
            <Text>
                Don't have an account?
            </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: .25}}/>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, width: "100%", justifyContent: "center", alignItems: "center"
  },
  ti: {
    height: 60, width: "90%", margin: 15, padding: 10, borderWidth: 2, borderColor: "black", borderRadius: 10, backgroundColor: "purple"
  },
  bg: {
      backgroundColor: "red"
  }
})