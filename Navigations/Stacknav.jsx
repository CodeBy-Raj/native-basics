import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from './src/screens/Profile'
import Search from './src/screens/Search'
import { NavigationContainer } from '@react-navigation/native'



const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen name="Home" component={Home} />


            <Stack.Screen name="Profile" component={Profile} />


            <Stack.Screen name="Search" component={Search} />




        </Stack.Navigator>
    )
}



const Stacknav = () => {
  return (
    <NavigationContainer>

     <StackNavigator/>
   
    
    </NavigationContainer>
  )
}

export default Stacknav

const styles = StyleSheet.create({})