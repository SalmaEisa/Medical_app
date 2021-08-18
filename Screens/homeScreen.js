import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Pressable, StyleSheet, Button, Text, View, TextInput } from 'react-native';


const homeScreen = ({ navigation }) => {
   const [ID, setID] = React.useState('');

    return (
      <View style={styles.container}>        
      <Text style={styles.text}>Welcome to your</Text>
        <Text style={styles.title}>Healthcare Tracker</Text>
        <Text style={{fontSize:20}}>Enter Your Patient ID:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(ID) => setID(ID)}
        value={ID}
        placeholder="ID number"
        keyboardType="numeric"
      />
     <Button onPress={() => navigation.navigate('options', { paramKey: ID})}
        title="Next" />        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title:{
        alignSelf:'center', 
        fontSize: 35,  
        position: 'absolute',
        top: 100,
        fontWeight: 'bold',
        color:'rgb(38, 77, 102)',
      },
      text:{
        alignSelf:'center', 
        fontSize: 30,  
        position: 'absolute',
        top: 60,
        color:'rgb(38, 77, 102)',
    },
    input: {
        height: 40,
        width:250,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign:'center'
      }
  });

  export default homeScreen
