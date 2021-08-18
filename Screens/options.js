import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Pressable, StyleSheet, Button, Text, View } from 'react-native';


const optionsScreen = ({  navigation, route }) => {
  ID=route.params.paramKey;
    return (
    <View style={styles.container}>
    <Pressable style={styles.button} >
    <Text style={styles.buttonText} onPress={() => navigation.navigate('profile',{ paramKey: ID})}>My Info</Text>
    </Pressable>
    <Pressable style={styles.button} >
    <Text style={styles.buttonText} onPress={() => navigation.navigate('appointments', { paramKey: ID,})}>Appointments</Text>
    </Pressable>
    <Pressable style={styles.button} >
    <Text style={styles.buttonText} onPress={()=>navigation.navigate('prescriptions', { paramKey: ID,})}>prescriptions</Text>
    </Pressable>
    <Pressable style={styles.button} >
    <Text style={styles.buttonText}  onPress={() => navigation.navigate('docNotes', { paramKey: ID,})}>Doctor Notes</Text>
    </Pressable>

    <StatusBar style="auto" />
  </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
      button:{
        backgroundColor:'#ffffff',
        borderColor: '#264d66',
        borderWidth:3,
        width:300,
        height:75,
        borderRadius:15,
        margin:15,
        justifyContent: 'center', 
        alignItems: 'center'
    
    },
    buttonText:{
      color:'#264d66',
      fontSize:30,
      textAlign:'center'
    
    }    
  });

  export default optionsScreen




  