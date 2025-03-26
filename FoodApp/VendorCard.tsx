// components/VendorCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const VendorCard = ({ vendor = {} }) => {
  // Ensure vendor object has all required fields
  
  const Vendor = { name : '{vendor', cuisine : "N/A", phone : "", image : "" } ;

  const openWhatsApp = () => {
    if (Vendor.phone) {
      Linking.openURL(`https://wa.me/${Vendor.phone}`);
    } 
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: Vendor.image || "https://via.placeholder.com/150" }} style={styles.image} />
      <Text style={styles.name}>{Vendor.name}</Text>
      <Text style={styles.cuisine}>{Vendor.cuisine}</Text>
      <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
        <Text style={styles.buttonText}>Contact on WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 10, margin: 10, borderRadius: 8, elevation: 3 },
  image: { width: '100%', height: 150, borderRadius: 8 },
  name: { fontSize: 18, fontWeight: 'bold', marginTop: 5 },
  cuisine: { color: 'gray' },
  button: { backgroundColor: '#25D366', padding: 8, marginTop: 5, borderRadius: 5 },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
});

export default VendorCard;
