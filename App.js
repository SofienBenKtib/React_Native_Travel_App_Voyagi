import * as React from 'react';
import { Text, View, StyleSheet,ScrollView,TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {Platform} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import Home from './components/Home'
import Account from './components/Account';
import Offers from './components/Offers';
import Explore from './components/Explore';
import Main from './components/Main'
import Signup from './components/Signup'
import Login from './components/Login'
import * as Facebook from 'expo-facebook';
import * as GoogleSignIn from 'expo-google-sign-in';
import Payement from './components/Payement';
import Contactus from './components/Contactus';
import News from './components/News'
import Expo from 'expo' 
import {useState} from 'react';

import Flights from './components/Flights';
import OneWay from './components/OneWay';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const HomeTab = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={
      {
        activeTintColor:'#0063B2FF',
        inactiveTintColor:'#cbc0d3',
        keyboardHidesTabBar:true
      }
    }
    >

    
    <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel:"Home",
        tabBarIcon:({color,size}) =>(
          <Icon name={Platform.OS ==='ios' ? "ios-home" : "md-home"} color={color} size={size} />
        )
      }}
    />

      <Tab.Screen name="Search" component={Explore}
      options={{
        tabBarLabel:"Search",
        tabBarIcon:({color,size}) =>(
          <Icon name={Platform.OS ==='ios' ? "ios-search" : "md-search"} color={color} size={size} />
        )
      }}
      />

      <Tab.Screen name="History" component={Flights} 
      options={{
        tabBarLabel:"Book Flights",
        tabBarIcon:({color,size}) =>(
          <Icon name={Platform.OS ==='ios' ? "ios-airplane-outline" : "ios-airplane-outline"} color={color} size={size} />
        )
      }}
      />

      <Tab.Screen name="Profile" component={Account}
      options={{
        tabBarLabel:"Profile",
        tabBarIcon:({color,size}) =>(
          <Icon name={Platform.OS ==='ios' ? "ios-people-outline" : "md-people-outline"} color={color} size={size} />
        )
      }}
      />

    </Tab.Navigator> 
  );
}


export default function App() {
  return (
   
    
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="HomeTab" component={HomeTab}  options={{headerShown: false }}/>
        <Stack.Screen name="Payement" component={Payement} options={{title:'Payement Types'}}/>
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Contactus" component={Contactus} options={{title:'Contact us'}}/>
        <Stack.Screen name="Explore" component={Explore} options={{title:'Search'}}/>
        <Stack.Screen name="Flights" component={Flights} options={{headerShown:true}}/>
    </Stack.Navigator>
    
      
    </NavigationContainer>
    
  );
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
    },
    safe:{
      flex:1,
      marginTop:15,
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
    }
})