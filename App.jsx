// import {StyleSheet, Text, View} from 'react-native';
// import HomeScreen from './src/screens/HomeScreen';
// import FlatCards from './hiteshChaudhary/components/FlatCards';
// import ElevatedCards from './hiteshChaudhary/components/ElevatedCards';
// import {SafeAreaView} from 'react-native';
// import {ScrollView} from 'react-native';
// import FancyCards from './hiteshChaudhary/components/FancyCards';
// import ActionCard from './hiteshChaudhary/components/ActionCard';
// import ContactList from './hiteshChaudhary/components/ContactList';

// const App = () => {
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <FlatCards />
//         <ElevatedCards />
//         <FancyCards />
//         <ActionCard />
//         <ContactList />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});


// App.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './FoodApp/HomeScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Vendors" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
