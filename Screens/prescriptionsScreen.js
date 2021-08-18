import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, FlatList, StyleSheet, Button, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { DataTable } from 'react-native-paper';
import { Table, Row, Rows } from 'react-native-table-component';



const prescriptionsScreen = ({ navigation, route }) => {
    
    const [isLoading, setLoading] = useState(true);
    const [presdata, setData] = useState([]);
    useEffect(() => {
        fetch(`http://192.168.0.128:3000/prescriptions/${route.params.paramKey}`)
          .then((response) => response.json())
          .then((json) => setData(json))          
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

      

        return (
            <View style={styles.container}>
             
              <DataTable>
                <View style={{flexDirection:'column',}}>
                    <FlatList 
                    data={presdata.prescs}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <View style={{marginTop:10, borderWidth:2, borderColor:'#bfcde0'}}>

                        <DataTable.Row><DataTable.Cell>Date: {item.Date}</DataTable.Cell></DataTable.Row>
                        <DataTable.Header style={styles.tableheader}>
                        <DataTable.Title >Medicine</DataTable.Title>
                        <DataTable.Title >Dose</DataTable.Title>
                        <DataTable.Title >Frequency</DataTable.Title>
                        <DataTable.Title  >Duration</DataTable.Title>
                        </DataTable.Header>
                        <DataTable.Row >
                        <DataTable.Cell>{item.MedName}</DataTable.Cell>
                        <DataTable.Cell>{item.Dose}</DataTable.Cell>
                        <DataTable.Cell>{item.frequency}</DataTable.Cell>
                        <DataTable.Cell>{item.Duration}</DataTable.Cell>
                        </DataTable.Row></View>
                    )}
                    /> 
        </View>
              </DataTable>
            </View>
          );
        }

     
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16, paddingTop: 30,
    },  
    tableheader: { 
        alignContent: "center",
        backgroundColor: '#bfcde0',
        
      },


  });

  export default prescriptionsScreen
