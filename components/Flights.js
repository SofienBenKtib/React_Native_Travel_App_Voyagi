import React from 'react'
import { View, Text,SafeAreaView,StyleSheet } from 'react-native'
import Login from './Login';
import Signup from './Signup';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OneWay from './OneWay';
import RoundTrip from './RoundTrip';

const Tab=createMaterialTopTabNavigator();

const Flights = ({navigation}) => {
    return (
        <SafeAreaView style={styles.bg}>
         <Tab.Navigator
         tabBarOptions={{
             pressColor:'#fff',
             tabStyle: { marginTop : 10 , top:5},
             style: { backgroundColor: 'white',elevation:30},
             
         }}
         >
            <Tab.Screen name="One way" component={OneWay}/>
            <Tab.Screen name="Round Trip" component={RoundTrip}/>
         </Tab.Navigator>
         </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    bg:{
        backgroundColor:'#add8e6',
        flex:1,
    },
})
export default Flights
