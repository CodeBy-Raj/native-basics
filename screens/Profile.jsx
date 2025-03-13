import {Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Search from './Search'


const Profile = ({navigation}) => {
  return (
    <View>
      <Text>Profile</Text>

      <Button title='Search' onPress={() => navigation.navigate("Search")     }/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})