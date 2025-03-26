import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>

      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>more....</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>more....</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>more....</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:34,
        fontWeight:"bold", 
        marginVertical:44,
        color:"white"
    },

    container:{
        flex:1,
        padding:8,
    },
    
    card:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        height:100,
        width:100,
        borderRadius:10,
        margin:10,
        color:"#000000"

    },

    cardElevated:{

        backgroundColor:"white",
        elevation:4,
        shadowOffset:{
            width:49,
            height:49,
            
        },

        shadowOpacity:1.9,
        shadowColor:"red",
        shadowRadius:32,
        
    },
  
})