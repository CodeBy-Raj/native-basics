import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Allitems from './Allitems'
import CreateScreen from './CreateScreen'





const HomeScreen = () => {

    const [view, setview] = useState(0)

 const [data, setdata] = useState([
    {
        id:1, name:"wheat", stock:5, unit:"kg", 
    },
    {
        id:2, name:"rice", stock:33, unit:"kg", 
    },
    {
        id:3, name:"pulses", stock:5, unit:"kg", 
    },
    {
        id:4, name:"basmati rice", stock:5, unit:"kg", 
    },
    {
        id:5, name:"cereals", stock:22, unit:"kg", 
    },
    ])
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.btnContainer}>

        <Pressable style={[styles.button , view === 0 ? {backgroundColor:"green"} : null]} onPress={()=>setview(0)}>
            <Text style={[styles.btnText] }>
                All items
            </Text>
        </Pressable>

        <Pressable style={[styles.button , view === 1 ? {backgroundColor:"green"} : null]} onPress={()=>setview(1)}>
            <Text style={styles.btnText }>
                Low Stock
            </Text>
        </Pressable>

        <Pressable style={[styles.button , view === 2 ? {backgroundColor:"green"} : null]} onPress={()=> setview(2)}>
            <Text style={styles.btnText }>
                Create
            </Text>
        </Pressable>
      </View>

    {view === 0 && <Allitems data={data}/>}
    {view===1 && <Allitems data={data.filter((item) => item.stock<20)}/>}
    {view === 2 && <CreateScreen data={data} setdata={setdata}/>}

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        paddingVertical:"10%",
        paddingHorizontal:"4%",
        backgroundColor:"gray",
       
        gap:30

    },
    title:{
        fontSize:24,
        fontWeight:"bold",
        color:"white",
        
        
    },
    btnContainer:{
        flexDirection:"row",
        // flex:1,
        gap:20,
        marginVertical:10,
        justifyContent:"center",
        alignItems:"center"
        
    },
    button:{
        paddingVertical:5,
        paddingHorizontal:10,
        padding:"2%",
        borderRadius:50,
        borderWidth:1,
        borderColor:"white"
    },
    btnText:{
        color:"white",
        // fontWeight:"bold",
        fontSize:15
    }
})