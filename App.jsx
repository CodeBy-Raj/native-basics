import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'



const dummy =[
    {id:1, name:"raj",email:"dhfdhfdh", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:2, name:"samar",email:"ggggg", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:3, name:"rohit",email:"hhhhh", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:4, name:"ankit",email:"jjjjj", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:5, name:"sam",email:"kkkk", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:6, name:"yash",email:"lllll", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:7, name:"vinnu",email:"wwwww", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:8, name:"vin",email:"eeeeee", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:9, name:"rishav",email:"rrrrrr", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:10, name:"rishav",email:"rrrrrr", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:11, name:"rishav",email:"rrrrrr", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:12, name:"rishav",email:"rrrrrr", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:13, name:"rishav",email:"rrrrrr", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:14, name:"rishav",email:"rrrrrr", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:15, name:"rishav",email:"rrrrrr", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:16, name:"rishav",email:"rrrrrr", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:17, name:"rishav",email:"rrrrrr", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:18, name:"rishav",email:"rrrrrr", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]

const App = () => {
  return (
    <View style={styles.container}>

        <FlatList data={dummy}
            renderItem={({item}) => (

    <View style={styles.card} >

        <Image style={{width:40, height:40, borderRadius:50}} source={{uri:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}></Image>
       
        <Text >harsh</Text>
        <Text>bio</Text>
        
    </View> 
            )}
            
            ItemSeparatorComponent={<View style={{height:15}}/>} 
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle ={{gap:15}}
            
            />

            

    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container:{
        flex:1,
       paddingVertical:40,
       paddingHorizontal:20,
    //   flexWrap:"wrap",
    // flexDirection:"row",
        height:"100%",
        width:"100%",
        backgroundColor:"grey"
    },

    card:{
        // flex:1,
        
         alignItems:"center",
        justifyContent:"center",
        height:"110",
        width:"110",
        backgroundColor:"white",
        borderRadius:10,
    }

})

















































// import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native'
// import React from 'react'
// import { Colors } from 'react-native/Libraries/NewAppScreen';

// const App = () => {

//     const theme = useColorScheme();
//     const isDark = theme === "dark"
    
//     const backgroundColor = isDark? "grey" :"white"
//     const textColor = isDark? "white" : "black"

//   return (
//     <SafeAreaView style={[styles.body , {backgroundColor: backgroundColor}]}>
//       <Text style={[styles.text ,{color:textColor}] }>Harsh </Text>
//     </SafeAreaView>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//     body:{
//         flex:1,
//         justifyContent:"center",
//         alignItems:"center",
        
//     },
//     text:{
//         fontSize: 30,
//         fontWeight: "bold",

//     }
// })