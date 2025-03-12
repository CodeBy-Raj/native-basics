import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const HandlingUserInput = () => {

    const [text, settext] = useState("");
    const [summitedText, setsummitedText] = useState("");

    const handleSubmit = ()=>{
        setsummitedText(text);
        settext('')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HandlingUserInput</Text>

      <TextInput style={styles.input} placeholder='Enter your text here:'
      value={text}
        onChangeText={settext}
        multiline
        numberOfLines={1}
      />

      <Text numberOfLines={1} style={{color:"white"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab cupiditate illum incidunt dicta ad pariatur iusto natus, fugit officia rem at omnis, architecto velit temporibus numquam, necessitatibus eligendi ut libero?</Text>

     <Button title='submit' onPress={handleSubmit}/>

     {summitedText ? (<Text style={styles.result}>Result :{summitedText} </Text>): null}
    </View>
  )
}

export default HandlingUserInput

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        gap:10,
    },

    title:{
        fontSize:20,
        fontWeight:"500",
        color:"white",

    },
    input:{
        padding:"20",
        width:"100%",
        borderWidth:1,
        borderRadius:15,
        height:"70",
        color:"white"
        
    },
    result:
    {
        color:"white",
        fontWeight:"500",
    }
})