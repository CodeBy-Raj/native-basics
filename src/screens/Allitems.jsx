import {StyleSheet, Text, View} from 'react-native';
import { FlatList } from 'react-native';

const Allitems = ({data}) => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
      </View>

    <FlatList 
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
        <View style={[styles.itemContainer, {backgroundColor: item.stock <20 ? "#FFCCCC" : "#D7F6BF"}]}>
             <Text style={styles.itemText}>{item.name}</Text>
             <Text style={styles.itemText}>{item.stock}</Text>
        </View>
    )}

    contentContainerStyle={{gap:10}}
    />

    

    </View>

    

  );
};

export default Allitems;

const styles = StyleSheet.create({

  headingContainer: {
    padding:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
          
  },

  itemText:{
    fontWeight:"500",
    fontSize:18,
    
    
  }

});
