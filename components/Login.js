import React,{ useState, useEffect } from 'react'
import { StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity,Alert,ActivityIndicator} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import * as Facebook from 'expo-facebook';
import Expo from 'expo'

import * as Google from 'expo-google-app-auth';
import { Value } from 'react-native-reanimated';



const Login = ({navigation}) => {

  const [isLoggedin, setLoggedinStatus] = useState(false);
  const [userData, setUserData] = useState({email:'',password:""});
  const [isImageLoading, setImageLoadStatus] = useState(false);
  const [isValid, setIsValid] = useState({
      email: false,
      password: false
  });
  const [isTouched, setIsTouched] = useState({
      email: false,
      password: false
  });



    const facebookLogIn = async () => {
        try {
          await Facebook.initializeAsync({
            appId: '441585853571763',
            appName :'navdemo'
          });
          const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
          });
          if (type === 'success') {

            // Get the user's name using Facebook's Graph API
            fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`)
              .then(response => response.json())
              .then(data => {
                alert('Welcome back : '+ data.name);
                navigation.navigate('HomeTab');
                setLoggedinStatus(true);
                setUserData(data);
                console.log('Welcome back: '+ data.name);
              })
              .catch(e => console.log(e))
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      }




    const signInWithGoogleAsync = async () => {
        try {
          const result = await Google.logInAsync({
            androidClientId: '708961680814-kfnfm73d6ijlcpjlqtbs6tiqod4j165m.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
          });
         const {type,user}=result;
          if (result.type === 'success') {
            const {name}=user;
            console.log('success')
            alert('Welcome back :  '  +  name)
            navigation.navigate('HomeTab')
            return result.accessToken;
           
          } else {
            console.log('login failed')
            alert('Login failed, please try again later')
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
        
      }
      

      //get request
    async function getPersonsFromServer(){
      try{
        let response=await fetch()
        let responseJson=await response.json();
        return responseJson.data; //list of persons
      }catch(error){
        console.error('Error is : ${error}');
      }
    }
    //post request
    async function insertNewFoodToServer(params){
      try{
        let response=await fetch()
      }catch(error){
        console.error('Error is : ${error}');
      }
    }

    const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ;

    console.log(emailRegex.test(userData.email))
    console.log((userData.email))
    return (
        <ScrollView style={styles.scrollV}>
        <View style={styles.container}>

            <Text style={styles.textTitle}>Welcome back !</Text>


            <View style={styles.inputView}>
            <Icon
                color={isTouched.email && !(emailRegex.test(userData.email))?'red':'#0063B2FF'}
                name="mail"
                size={20}
            />
            <TextInput
                style={{
                    flex:1,
                    paddingHorizontal:0,
                    borderBottomColor:isTouched.email && !(emailRegex.test(userData.email))?'red':'#0063B2FF',
                    borderBottomWidth:1,
                    paddingBottom: 10,
                    marginLeft:10,
                }}
                placeholder={'Email'}
                onBlur={()=>{
                    setIsTouched(prevState=>{
                        return{
                            ...prevState, email: true
                        }
                    })
                }}
               onChangeText={(text)=>{
                   setUserData(prevState=>{
                    return {
                        ...prevState, email: text
                    }})
               }}
            />
                <Text style={{position: 'absolute', top: 50, left: 30, color: 'red'}}>{isTouched.email && !(emailRegex.test(userData.email))?'Wrong email format':''}</Text>
            </View>

            <View style={styles.inputView}>
            <Icon
                color={isTouched.password && userData.password===''?'red':'#0063B2FF'}
                name="lock-closed"
                size={20}
            />
            <TextInput
                style={{
                    flex:1,
                    paddingHorizontal:0,
                    borderBottomColor:isTouched.password && userData.password===''?'red':'#0063B2FF',
                    borderBottomWidth:1,
                    paddingBottom: 10,
                    marginLeft:10,
                }}
                onBlur={()=>{
                    setIsTouched(prevState=>{
                        return{
                            ...prevState, password: true
                        }
                    })
                }}
                onChangeText={(text)=>{
                    setUserData(prevState=>{
                        return {
                            ...prevState, password: text
                        }})}}
                placeholder={'Password'}
                //onChangeText={(value) => setTextInputPassword(value)}
                //onChange={EmailVerif}
            />
                <Text style={{position: 'absolute', top: 50, left: 30, color: 'red'}}>{isTouched.password && userData.password===''?'Password required':''}</Text>
            </View>




            <TouchableOpacity style={[styles.container,styles.btn]}
            onPress={() => navigation.navigate('HomeTab')}>
                <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.reg}> Or Login using : </Text>
            <View style={{flexDirection:'row' , padding:15}}>
            <TouchableOpacity style={{flexDirection:'row' , width:135,height:45,marginHorizontal:10,borderRadius:5,backgroundColor:'#3b5c8f'}}
            onPress={facebookLogIn}>
                <Icon style={styles.accIcon} name="logo-facebook" />
                <Text style={styles.accTxt}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row' , width:135,height:45,marginHorizontal:10,borderRadius:5,backgroundColor:'#ec482f'}}
           onPress={signInWithGoogleAsync} >
                <Icon style={styles.accIcon} name="logo-google" />
                <Text style={styles.accTxt}>Google</Text>
            </TouchableOpacity>
            </View>

        </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    scrollV:{
        backgroundColor:'white',
    },
    textTitle:{
        fontSize:40,
        marginVertical:5,
        fontWeight:'bold',
        marginTop:40,
        color:'#000',
    },
    inputView:{
        width:'80%',
        height:60,
        borderRadius:5,
        paddingHorizontal:0,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:7,
    },
    btn:{
        width:'50%',
        borderColor:'#add8e6',
        height:45,
        marginVertical:30,
        backgroundColor:'#0063B2FF',
        borderRadius:5,
    },
    btnTxt:{
        fontSize:22,
        color:'white',
        fontWeight:'bold',
        marginVertical:10,
    },
    reg:{
        fontSize:17,
    },
    accTxt:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
        marginVertical:10,
        marginHorizontal:5,
    },
    accIcon:{
        color:'white',
        fontSize:20,
        marginVertical:10,
        marginHorizontal:10,
    }
})

export default Login