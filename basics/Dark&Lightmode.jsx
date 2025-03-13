import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {

    const theme = useColorScheme();
    const isDark = theme === "dark"
    
    const backgroundColor = isDark? "grey" :"white"
    const textColor = isDark? "white" : "black"

  return (
    <SafeAreaView style={[styles.body , {backgroundColor: backgroundColor}]}>
      <Text style={[styles.text ,{color:textColor}] }>Harsh </Text>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
    body:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    },
    text:{
        fontSize: 30,
        fontWeight: "bold",

    }
})