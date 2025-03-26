import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function ActionCard() {

    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }


  return (
    <View>
      <Text style={styles.actionHeading}>Blog Card</Text>

      <View style={[styles.card,styles.elevatedCard ]}>

        <View style={styles.cardTitle}>
            <Text style={styles.cardHeading}>Card Heading</Text>
        </View>

        <Image 
            source={{uri: ""

            }}

            style={styles.cardImage}
        />

        <View style={styles.bodyContainer}>

            <Text numberOfLines={5} style={styles.bodyDetails}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur neque vel itaque impedit quia nobis quaerat necessitatibus dignissimos dolorum doloribus facere beatae accusantium, ipsam iusto iure? Explicabo quod rem atque perferendis nobis dolore! Vitae totam quisquam ducimus tenetur expedita in accusantium, consequatur quod, ipsa saepe quia vel quasi eaque explicabo.</Text>

        </View>

        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('www.google.com')}>
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openWebsite('www.google.com')}>
                <Text style={styles.socialLinks}>Follow For More</Text>
            </TouchableOpacity>

        </View>
        

      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    actionHeading:{

        fontSize:34,
        color:'white',
        marginTop:23,
      
        borderTopColor:'white',
        borderTopWidth:2
    },

    card:{
        backgroundColor:'orange',
        margin:8,
        borderRadius:6,
        height:380

    },
    elevatedCard:{
        elevation:5,
        shadowOffset:{
            height:8,
            width:7

        }
    },

    cardTitle:{
        // height:40,
        justifyContent:'center',
        alignItems:'center',
        // borderWidth:2,
        // borderBottomColor:"#00",
        
        
        
    },

    cardHeading:{
        fontSize:22,
        fontWeight:'bold',
        borderBottomWidth:2,
        
    },

    cardImage:{
        height:130,
        width:100,
    },
    bodyContainer:{
      
   margin:5
    },

    bodyDetails:{
        color:'#00000',
        fontSize:15,
        padding:9
    },

    footerContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
       margin:23
    },
    socialLinks:{
        color:'#00000',
        backgroundColor:'#ffff',
        paddingHorizontal:16,
        paddingVertical:8,
        borderRadius:9,
        fontWeight:'bold',
    },
})