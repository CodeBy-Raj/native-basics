import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Search from './screens/Search';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';

const App = () => {
  const TabNav = createBottomTabNavigator();


  function TabNavigator() {
    return (
      <TabNav.Navigator
        screenOptions={{
          tabBarInactiveBackgroundColor: 'purple',
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'white',

          tabBarLabelStyle: {
            fontSize: 15,
            paddingBottom: 5,
            fontWeight: '600',
          },
          tabBarStyle: {
            height: 80,
          },
        }}>

        <TabNav.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({size, color}) => (
            <AntDesign name="home" size={size} color={color} />
        ),
          }}
        />
        
        <TabNav.Screen name="Profile" component={Profile} options={{
            tabBarIcon: ({size ,color})=> (
                <Feather name="user" size={size} color={color}/>
            )
        }}/>

        <TabNav.Screen name="Search" component={Search} options={{
            tabBarIcon: ({size ,color})=> (
                <Octicons name="search" size={size} color={color}/>
            )
        }}/>
      </TabNav.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
