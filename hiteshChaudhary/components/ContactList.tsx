import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image, ScrollView} from 'react-native';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Raj',
      status: 'Android developer',
      imageUrl: 'www.google.com',
    },
    {
      uid: 2,
      name: 'Raj',
      status: 'Android developer',
      imageUrl: 'www.google.com',
    },
    {
      uid: 3,
      name: 'Raj',
      status: 'Android developer',
      imageUrl: 'www.google.com',
    },
    {
      uid: 4,
      name: 'Samar',
      status: 'Google',
      imageUrl: 'www.google.com',
    },
    {
      uid: 5,
      name: 'Raj',
      status: 'Software developer',
      imageUrl: 'www.google.com',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>

      <ScrollView style={styles.container} scrollEnabled={true}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: '#ffff',
    fontSize: 24,
  },

  container: {
    paddingHorizontal: 22,
    marginTop: 21,
  },

  userCard: {
    flexDirection: 'row',
    margin: 9,
    flex: 1,
    backgroundColor: 'green',
    borderRadius: 12,
  },
  userImage: {
    height: 70,
    width: 100,
    borderRadius: 60 / 2,
  },

  userName: {
    color: '#ffff',
    fontSize: 21,
    fontWeight: '600',
  },

  userStatus: {
    color: '#ffff',
    fontSize: 17,
  },
});
