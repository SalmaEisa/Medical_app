import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { FlatList,StyleSheet, Button, Text, View, TextInput } from 'react-native';
import { Fontisto,FontAwesome, FontAwesome5, Foundation, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';

const profileScreen = ({ route }) => {

    const [isLoading, setLoading] = useState(true);
    const [userdata, setData] = useState([]);
    useEffect(() => {
        fetch(`http://192.168.0.128:3000/userInfo/${route.params.paramKey}`)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.title}>{userdata.name}</Text>
            </View>
            <View style={styles.box}>
                <View style={styles.infoContainer}>
                <MaterialCommunityIcons name="human-male-height"  size={20} color="#264d66" style={{alignSelf:'center'}} />
                <Text style={styles.text}> Height: </Text>
                <Text style={styles.info}>{userdata.height}</Text></View>
                
                <View style={styles.infoContainer}>
                <FontAwesome5 name="weight" size={20} color="#264d66" style={{alignSelf:'center'}}/>
                <Text style={styles.text}> Weight: </Text>
                <Text style={styles.info}>{userdata.weight}</Text></View>

                <View style={styles.infoContainer}>
                <Fontisto name="blood-drop" size={20} color="#264d66" style={{alignSelf:'center'}}/>
                <Text style={styles.text}> Blood Type: </Text>
                <Text style={styles.info}>{userdata.bloodType}</Text></View>


                <View style={styles.infoContainer}>
                <AntDesign name="user" size={20} color="#264d66" style={{alignSelf:'center'}}/>
                <Text style={styles.text}> Age: </Text>
                <Text style={styles.info}>{userdata.age}</Text></View>

                <View style={styles.infoContainer}>
                <Foundation name="male-female" size={20} color="#264d66" style={{alignSelf:'center'}}/>
                <Text style={styles.text}> Gender: </Text>
                <Text style={styles.info}>{userdata.gender}</Text></View>

                <View style={styles.infoContainer}>
                <FontAwesome5 name="hand-holding-medical" size={20} color="#264d66" style={{alignSelf:'center'}} />
                <Text style={styles.text}> Insurance: </Text>
                <Text style={styles.info}>{userdata.insurance}</Text></View>

                <View style={styles.infoContainer}>
                <FontAwesome5 name="head-side-cough"  size={20} color="#264d66" style={{alignSelf:'center'}}/>
                <Text style={styles.text}> Allergies: </Text>
                <Text style={styles.info}>{userdata.allergies}</Text></View>

                <View style={styles.infoContainer}>
                <FontAwesome name="heartbeat" size={20} color="#264d66" style={{alignSelf:'center'}} />
                <Text style={styles.text}> Health Problems: </Text>
                <Text style={styles.info}>{userdata.problems}</Text></View>





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
    title:{
        color:'white',
        fontSize:30,
        textAlign:'center',
        padding:10,

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
    headerText:{
        color:'white'
    },
    box:{
        flexDirection:'column',
        flex: 0.8,
        marginTop: -110,
        backgroundColor: '#fff',
        borderColor:'#264d66',
        width:320,
        height: 'auto',
        borderWidth:2,
        borderRadius:15,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft:20,
        
    },
    infoContainer:{
        flexDirection:'row',
        flexWrap: 'wrap'

    },
    text:{
        fontSize:17,
        lineHeight:50,
        fontWeight:'bold',
    },
    info:{
        fontSize:17,
        lineHeight:50,
    }
    
  });

  export default profileScreen
