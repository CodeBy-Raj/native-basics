import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

// Define the type for the contact prop
type Contact = {
  name: string;
  status: string;
  cuisine: string;
  price: string;
  imageUrl: string;
  phone: string;
};

export default function VendorModified({ contact }: { contact: Contact }) {
  const { name, status, cuisine, price, imageUrl ,phone} = contact;

  const openWhatsApp = () => {
    Linking.openURL(`https://wa.me/${phone}`)
  } 

  return (
    <View style={styles.card}>
      {/* Vendor Image */}
      <Image style={styles.vendorImage} source={{ uri: imageUrl }} />

      {/* Vendor Details */}
      <View style={styles.details}>
        <Text style={styles.vendorName}>{name}</Text>
        <Text style={styles.cuisine}>{cuisine}</Text>
        <View style={styles.bottomRow}>
          <Text style={styles.price}>₹{price}</Text>
          <Text style={styles.status}>{status}</Text>
        </View>

        <TouchableOpacity style={styles.submit} onPress={openWhatsApp}>
            <Text style={styles.submitText}>Contact via Whatsapp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden', // Ensures the image and details stay within the card
    shadowColor: '#000',
    shadowOffset: {
         width: 0,
        height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Adds shadow for Android
  },
  vendorImage: {
    height: 200,
    width: '100%',
  },
  details: {
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  vendorName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cuisine: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27ae60', 
  },
  status: {
    fontSize: 16,
    color: '#888',
  },
  submit:{
    backgroundColor:'#27ae40',
    padding:10,
    borderRadius:9,
    alignItems:'center',
    margin:10,

  },

  submitText:{
    fontSize:17,
    fontWeight:'bold',
    color:'#ffff'

  }

});