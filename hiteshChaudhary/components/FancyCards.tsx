import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCards</Text>
      <View style={[styles.card, styles.cardElement]}>
        <Image 
        source={{
            uri:""
        }}
        style={styles.cardImage}
        
        />
      

      
       
        <View style={styles.cardTitle}>
          <Text style={styles.cardHeading}>Card Title</Text>
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.bodyDetails}>Card Body</Text>
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.footerDetails}>Card Footer</Text>
        </View>

     
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    headingText:{
      fontSize:34,
      color:"#ffff",
      fontWeight:"bold",
    },

    card:{ 
      backgroundColor:'#ffff',
      borderRadius:18,
    },

    cardElement:{},
    cardImage:{
      height:200,
      width:200,
    },

    cardTitle:{ paddingLeft:22},
    cardHeading:{
      color:'#00000',
      fontSize:28,
  
    },

    cardBody:{
      
      justifyContent:'center',
      alignItems:'center',
       
    },
    bodyDetails:{
      color:'#00000',
      fontSize:20
    },
    cardFooter:{
      marginTop:30,
      padding:22,
    },

    footerDetails:{
      fontSize:19,
      color:'#00000',

    }
})