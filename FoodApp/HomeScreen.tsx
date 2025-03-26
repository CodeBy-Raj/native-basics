import React from 'react';
import { View, FlatList } from 'react-native';
import VendorModified from './VendorModified';

const HomeScreen = () => {
  const contacts = [
    {
      uid: '1',
      name: 'Harsh',
      status: 'Online',
      cuisine: 'All dishes available',
      price: '200',
      phone: '9988989898',
      imageUrl: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      uid: '2',
      name: 'Mohan',
      status: 'Offline',
      cuisine: 'All dishes',
      price: '200',
      phone: '9988989898',
      imageUrl: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      uid: '3',
      name: 'Hariom',
      status: 'Online',
      cuisine: 'All dishes',
      price: '200',
      phone: '9988989898',
      imageUrl: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },

    {
      uid: '4',
      name: 'Samar',
      status: 'Google',
      cuisine: 'All dishes',
      price: '200',
      phone: '9988989898',
      imageUrl: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      uid: '5',
      name: 'Raj',
      status: 'Software developer',
      cuisine: 'All dishes',
      price: '400',
      phone: '9988989898',
      imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <View>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => <VendorModified contact={item} />}
      />
    </View>
  );
};

export default HomeScreen;