import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards </Text>

        <View style={styles.container}>

            <View style={styles.card1}>
                <Text>Card 1</Text>
            </View>
            <View style={styles.card2}>
                <Text>card 2</Text>
            </View>
            <View style={styles.card3}>
            <Text>card 3</Text>
            </View>
            <View style={styles.card4}>
            <Text>card 4</Text>
            </View>

        </View>

    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({

    headingText:{
        fontSize:24,
        fontWeight:"bold",
        margin:29,
        padding:19,
        color:"white"
    },

    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        gap:10,
        // margin:100,
        flexDirection:"row",
        padding:9
      
    },
    card1:{
        flex:1,
        height:100,
        width:100,
        backgroundColor:"green"

    },
    card2:{
        height:100,
        width:100,
        backgroundColor:"yellow"

    },
    card3:{
        height:100,
        width:100,
        backgroundColor:"purple"

    },
    card4:{
        height:100,
        width:100,
        backgroundColor:"white",

    }


})