import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from './Profile'

const Home = ({ navigation }) => {

  return (
    <View style={{width:"100%", height:"100%", alignItems:"center", justifyContent:"center", backgroundColor:"black"}}>

      <Text style={{color:"white", fontSize:40, fontWeight:"500", marginBottom:20}}>Home</Text>

    <Button title='Profile' onPress={() => navigation.navigate("Profile") } />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})