import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import FlatCards from './hiteshChaudhary/components/FlatCards';
import ElevatedCards from './hiteshChaudhary/components/ElevatedCards';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import FancyCards from './hiteshChaudhary/components/FancyCards';
import ActionCard from './hiteshChaudhary/components/ActionCard';
import ContactList from './hiteshChaudhary/components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
