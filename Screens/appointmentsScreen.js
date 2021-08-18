import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, FlatList, StyleSheet, Button, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { DataTable } from 'react-native-paper';



const appointmentsScreen = ({ navigation, route }) => {
        
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://192.168.0.128:3000/appointments/${route.params.paramKey}`)
          .then((response) => response.json())
          .then((json) => setData(json))          
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

      
    return (
      <View style={styles.container}>
        
            <DataTable style={{marginTop:100}}>
                <View style={{flexDirection:'column',}}>
                    
                        <DataTable.Header style={styles.tableheader}>
                        <DataTable.Title >Type</DataTable.Title>
                        <DataTable.Title >Doctor</DataTable.Title>
                        <DataTable.Title >Date</DataTable.Title>
                        <DataTable.Title  >Time</DataTable.Title>
                        </DataTable.Header>
                        <DataTable.Row >
                        <DataTable.Cell>{data.Type}</DataTable.Cell>
                        <DataTable.Cell>{data.Doctor}</DataTable.Cell>
                        <DataTable.Cell>{data.Date}</DataTable.Cell>
                        <DataTable.Cell>{data.Time}</DataTable.Cell>
                        </DataTable.Row></View>
                    
            </DataTable>
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      },
      tableheader: { 
          alignContent: "center",
          backgroundColor: '#bfcde0',
          
        },
  });

  export default appointmentsScreen
