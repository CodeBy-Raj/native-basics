import { Pressable, StyleSheet, Text, TextInput, View,FlatList } from 'react-native'
import React, { useState } from 'react'

const CreateScreen = ({data,setdata}) => {

    const [itemName, setitemName] = useState('')
    const [stock, setstock] = useState('')
    const [editingItemId, setEditingItemId] = useState(false);

    const addItemHandler = () => {
        if (editingItemId) {
          // Edit existing item
          const updatedData = data.map(item =>
            item.id === editingItemId ? { ...item, name: itemName, stock: parseInt(stock, 10) } : item
          );
          setdata(updatedData);
          setEditingItemId(null);
        } else {
          // Add new item
          const newItem = {
            id: Date.now().toString(),
            name: itemName,
            stock: parseInt(stock, 10),
          };
          setdata([...data, newItem]);
        }
        setitemName('');
        setstock('');
      };
      const editItemHandler = (item) => {
        setitemName(item.name);
        setstock(item.stock.toString());
        setEditingItemId(item.id);
      };
    const deleteItemHandler = (id)=>{
        setdata(data.filter((item) => item.id != id))
    }

  return (
    <View style={styles.container}>
     <TextInput 
     placeholder='Enter an item name....'
     style={styles.input}
     value={itemName}
     onChangeText={(text)=> setitemName(text)}
     placeholderTextColor="#999"
     

     />
     <TextInput 
     placeholder='Enter stock....'
     style={styles.input}
     value={stock}
     onChangeText={(text)=> setstock(text)}
     placeholderTextColor="#999"
     keyboardType='numeric'
     

     />
    <Pressable style={styles.btn} onPress={addItemHandler}>
        <Text style={styles.btnText}>
           {editingItemId ?  "Edit Item" : "Add item"}
        </Text>
    </Pressable>

     <View>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>All Items</Text>
            
          </View>
    
        <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <View style={[styles.itemContainer, {backgroundColor: item.stock <20 ? "#FFCCCC" : "#D7F6BF"}]}>
                 <Text style={styles.itemText}>{item.name}</Text>
                 

                <View style={{flexDirection:"row", gap:20}}>
                <Text style={styles.itemText}>{item.stock}</Text>
                <Pressable onPress={() => editItemHandler(item)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>

                 <Pressable onPress={() => deleteItemHandler(item.id)}>
                    <Text style={styles.itemText}>Delete</Text>
                 </Pressable>
                 
                </View>
                 
            </View>
        )}
    
        contentContainerStyle={{gap:10}}
        />
    
        
    
        </View>
    
        


    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({

    container:{
        paddingVertical:"24%",
        // flexWrap:"wrap",
        // flexDirection:"row",
        // flex:1,
        gap:20,
        justifyContent:"center",
        alignItems:"center"
    },

    input:{
        borderWidth:1.5,
        borderColor:"#D7F6BFFF",
        paddingHorizontal:15,
        paddingVertical:10,
        height:"50",
        borderRadius:10,
        width:"100%",
        flexWrap:"wrap",
        
        // flexDirection:"row"
        

    },

    btn:{
        backgroundColor:"#CABFEEFF",
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:7,
        justifyContent:"center",
        alignItems:"center"

    },

    btnText:{
        fontSize:17,
        fontWeight:500
    },

    headingContainer: {
        padding:10,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 15,

      },
    
      headingText: {
        fontWeight: '800',
        fontSize: 20,
       
      },
    
      itemContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:15,
        paddingVertical:9,
        borderRadius:12,
        width:"100%"
              
      },
    
      itemText:{
        fontWeight:"500",
        fontSize:18,
        
        
      }

})