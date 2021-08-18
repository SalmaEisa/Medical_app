import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Button, Text, View } from 'react-native';
import homeScreen from './Screens/homeScreen';
import profileScreen from './Screens/profileScreen';
import appointmentsScreen from './Screens/appointmentsScreen';
import prescriptionsScreen from './Screens/prescriptionsScreen';
import docNotesScreen from './Screens/docNotesScreen';
import optionsScreen from './Screens/options';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="home" component={homeScreen}/>
      <Stack.Screen name="options" component={optionsScreen}/>
      <Stack.Screen name="profile" component={profileScreen} />
      <Stack.Screen name="appointments" component={appointmentsScreen} />
       <Stack.Screen name="prescriptions" component={prescriptionsScreen} />
      <Stack.Screen name="docNotes" component={docNotesScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
