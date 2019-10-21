import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native'
import Axios from 'axios'

import Images from '../assets'
import { ScrollView } from 'react-native-gesture-handler'
const { height, width } = Dimensions.get("window")

export default function Signup({navigation}){

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confirm, setConfirm] = useState("")

  const login = () => {
    if(email.length && pass.length && confirm === pass){
      Axios.post(`http://localhost:3000/users/signup/${email}/${pass}`).then(({data})=>{
        console.log("signed up");
      }).catch((err)=>{
        console.log('err', err);
      })
    }
  }

  return(
    <SafeAreaView style={[styles.container, {backgroundColor: "grey", paddingVertical: 5}]}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={0} contentContainerStyle={[styles.container]} enabled={Platform.OS === "ios" ? true : false}>
      <ScrollView contentContainerStyle={{height: height*.95, width: width}} showsVerticalScrollIndicator={false}>
      <View style={[styles.container, {padding: 10, flex: .3}]}>
        <Image source={Images.icon} resizeMode="contain" style={{width: 90, height: 90, marginLeft: 28}}/>
      </View>
      <View style={[styles.container, {flex: 1.5, maxHeight: height*.3, justifyContent: "space-evenly", padding: 20}]}>
        <TextInput style={styles.ti} placeholder="email" placeholderTextColor="black"  onChangeText={(change)=>setEmail(change)}/>
        <TextInput style={styles.ti} placeholder="password" placeholderTextColor="black"  onChangeText={(change)=>setPass(change)}/>
        <TextInput style={styles.ti} placeholder="confirm password" placeholderTextColor="black"  onChangeText={(change)=>setConfirm(change)}/>
      </View>
      <View style={{flex: .3, width: "100%", justifyContent: "center", alignItems: "center", padding: 20}}>
        <TouchableOpacity onPress={login} style={{height: 60, width: "90%", margin: 5, justifyContent: "center", alignItems: "center", borderWidth: 2, borderColor: "black", backgroundColor: "green", borderRadius: 10}}>
            <Text>Signup</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.container, {flex: .2, justifyContent: "flex-start", padding: 20}]}>
        <TouchableOpacity onPress={()=>navigation.navigate("login")}>
            <Text>
                Already have an account?
            </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, width: "100%", justifyContent: "center", alignItems: "center"
  },
  ti: {
    height: 60, width: "90%", margin: 5, padding: 10, borderWidth: 2, borderColor: "black", borderRadius: 10, backgroundColor: "purple"
  }
})