import React from 'react'
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native'

// import Navigation from './Navigation'

// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';


// const Stack = createStackNavigator();


const Main = ({navigation}) => {

    return (
     
            <View style={styles.container}>

            <Image
                source={require('../assets/airplane.png')}
                resizeMode="center"
                style={styles.image}
            />
           
               <View style={styles.box}>


                 <Text style={styles.textTitle}>Welcome !</Text>
                 <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                 <Text style={styles.textBody}>You have an account ? Log In</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                 <Text style={styles.textBody}>You are new ? Please register</Text>
                 </TouchableOpacity>


               </View>



            </View>
  
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
    },
    textTitle:{
        fontSize:40,
        marginVertical:10,
    },
    image:{
        width:400,
        height:250,
        marginVertical:10,
    },
    textBody:{
        padding:5,
        marginTop:5,
    },
    box:{
        backgroundColor:'#add8e6',
        width:'100%',
        height:150,
        alignItems:'center',
        borderBottomLeftRadius:70,
        borderTopRightRadius:70,
    }
})

export default Main