import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, FlatList, StyleSheet, Button, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { DataTable } from 'react-native-paper';


const docNotesScreen = ({ navigation, route }) => {
     
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://192.168.0.128:3000/docNotes/${route.params.paramKey}`)
          .then((response) => response.json())
          .then((json) => setData(json))          
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

      
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.title}>Doctor Notes</Text>
            </View>
            <View style={styles.box}>
            <FlatList
            data={data.notes}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
                <View style={{ flexDirection:'row', flexWrap: 'wrap', margin:10}} >
                  <Text style={styles.noteHeader}>Date: {item.Date}</Text>
                  <Text style={styles.noteHeader}>Dr: {item.docName}</Text>
                  <Text style={styles.noteContent}>{item.Notes}</Text>
                </View>                

            )}
            />
            </View>
            



      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    header:{
        backgroundColor:'#264d66',
        width:'100%',
        height:200,
        alignItems:'flex-start' ,
        padding:20,
        paddingLeft:10,
        borderBottomStartRadius:30,
        borderBottomEndRadius:30
    },
    title:{
        color:'white',
        fontSize:30,
        textAlign:'center',
        padding:10,

    },
    box:{
        flexDirection:'column',
        flex: 0.8,
        marginTop: -110,
        backgroundColor: '#fff',
        borderColor:'#264d66',
        width:340,
        height: 'auto',
        borderWidth:2,
        borderRadius:15,
        justifyContent: 'center',
        paddingHorizontal:10, paddingVertical:40
    },
    noteHeader:{
        backgroundColor:'#264d66',
        color:'#fff',
        fontSize:15,
        width:295,
        padding:5,

    },
    noteContent:{
        width:295,
        borderWidth:2,
        borderColor:'#264d66',
        fontSize:18,
        paddingVertical:10,
        paddingHorizontal:5,
        

    }
  });

  export default docNotesScreen
