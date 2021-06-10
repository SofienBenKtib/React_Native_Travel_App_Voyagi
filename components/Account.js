import React from 'react';
import { Component } from 'react';
import { View, Text,TouchableOpacity,SafeAreaView,ScrollView,StyleSheet } from 'react-native';
//import { colors } from 'react-native-elements';
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Payement from './Payement';
import Contactus from './Contactus';
import News from './News';

const Stack = createStackNavigator();


const Account = ({navigation}) => {
  
    return (
      
        <SafeAreaView style={styles.safe}>
        <View style={styles.bg}>
   
       
          <TouchableOpacity style={styles.btnWithIcon}
          onPress={() => navigation.navigate('Payement')}>
          <Icon
            name='md-wallet-outline'
            size={28}
            color='#0063B2FF'
          />
          <Text style={styles.btnText}>Payement Types</Text>
          </TouchableOpacity>
         
          <TouchableOpacity style={styles.btnWithIcon}
         onPress={() => navigation.navigate('Contactus')}>
          <Icon
            name='ios-mail-outline'
            size={28}
            color='#0063B2FF'
          />
          <Text style={styles.btnText}>Contact Us</Text>
          </TouchableOpacity>
         
         
          <TouchableOpacity style={styles.btnWithIcon}
          onPress={() => navigation.navigate('News')}>
          <Icon
            name='md-newspaper-outline'
            size={28}
            color='#0063B2FF'
          />
          <Text style={styles.btnText}>Newsletter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnWithIcon}
          onPress={()=> navigation.navigate('Main')}>
          <Icon
            name='ios-log-in-outline'
            size={28}
            color='red'
          />
          <Text style={styles.btnTextLogout}>Logout</Text>
          </TouchableOpacity>
     
        </View>
        </SafeAreaView>
       
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      up:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:'85%',
        },
        text:{
          fontSize:20,
        },
        btnText:{
          color:"black",
          fontSize:17,
          marginLeft:45,
          justifyContent:'center',
        },
        bg:{
          backgroundColor:'white',
          alignItems:'flex-start',
          justifyContent:'center',
          flex:1,
        },
        safe:{
          flex:1,
        },
        btnWithIcon:{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          paddingVertical:8,
          paddingHorizontal:20,
          shadowColor:'black',
          marginTop:30,
          flex:1,
        },
        btnTextLogout:{
          color:"red",
          fontSize:17,
          marginLeft:45,
          justifyContent:'center',
        },
})
export default Account
