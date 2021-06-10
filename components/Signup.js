import React,{Component} from 'react'
import { StyleSheet, Text, View, Image ,ScrollView,TextInput,TouchableOpacity} from 'react-native'

import Icon from "react-native-vector-icons/Ionicons";
import axios from 'axios';
import Home from './Home'

function HomePage({navigation}){
    <Home/>
}
export default class Signup extends React.Component {

    //fetching data from api
    async componentDidMount(){
        
        console.log("console log goes here")
    }


    constructor(props) {
        super(props)
        this.state = {
           name:'',
           familyName:'',
           email:'',
           password:'',
           passwordRepeat:''

        }
    }

            register(){
                console.log('im here ')
            fetch(`http://192.168.1.6:7000/saveUser`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nom:this.state.familyName,
                    prenom: this.state.name,
                    email:this.state.email,
                    motdepasse:this.state.passwordRepeat
                })
            }).then((response) => {
                // console.log(response.headers);
                return response.json();
            })
                .then((responseJson) => {
                    console.log(responseJson)
                        alert('Hello: '+ this.state.name);
                        this.props.navigation.navigate('HomeTab');
                 })
                .catch((error) => {
                    console.error(error); 
                })
        }


    render() {
    return (
        <ScrollView style={styles.scrollV}>
        <View style={styles.container}>
            <Text style={styles.textTitle}>Sign up !</Text>

            <View style={styles.inputView}>
            <Icon
                color='#0063B2FF'
                name="person"
                size={20}
            />
            <TextInput
                style={{
                    flex:1,
                    paddingHorizontal:0,
                    borderBottomColor:'#0063B2FF',
                    borderBottomWidth:1,
                    marginLeft:10,
                }}
                placeholder={'Name'}
                onChangeText={text => this.setState({name: text})}
            />
            </View>
            <View style={styles.inputView}>
            <Icon
                color='#0063B2FF'
                name="person"
                size={20}
            />
            <TextInput
                style={{
                    flex:1,
                    paddingHorizontal:0,
                    borderBottomColor:'#0063B2FF',
                    borderBottomWidth:1,
                    marginLeft:10,
                }}
                placeholder={'Family Name'}
                onChangeText={text => this.setState({familyName: text})}
            />
            </View>

            <View style={styles.inputView}>
            <Icon
                color='#0063B2FF'
                name="mail"
                size={20}
            />
            <TextInput
                style={{
                    flex:1,
                    paddingHorizontal:0,
                    borderBottomColor:'#0063B2FF',
                    borderBottomWidth:1,
                    marginLeft:10,
                }}
                placeholder={'Email'}
                onChangeText={text => this.setState({email: text})}
            />
            </View>

            <View style={styles.inputView}>
            <Icon
                color='#0063B2FF'
                name="lock-closed"
                size={20}
            />
            <TextInput
                style={{
                    flex:1,
                    paddingHorizontal:0,
                    borderBottomColor:'#0063B2FF',
                    borderBottomWidth:1,
                    marginLeft:10,
                }}
                placeholder={'Password'}
                onChangeText={text => this.setState({password: text})}
            />
            </View>

            <View style={styles.inputView}>
            <Icon
                color='#0063B2FF'
                name="lock-closed"
                size={20}
            />
            <TextInput
                style={{
                    flex:1,
                    paddingHorizontal:0,
                    borderBottomColor:'#0063B2FF',
                    borderBottomWidth:1,
                    marginLeft:10,
                }}
                placeholder={'Repeat your password'}
                onChangeText={text => this.setState({passwordRepeat: text})}
            />
            </View>

            <TouchableOpacity style={[styles.container,styles.btn]}
            >
                <Text style={styles.btnTxt}
                onPress = {this.register.bind(this)}>Register</Text>
            </TouchableOpacity>
            {/* <View>

            {this.state.users.map(r => <Text>{r.email}</Text>)}    
            </View> */}

           
            <View style={{flexDirection:'row' , padding:15}}>
            
          
            
            </View>

        </View>
        </ScrollView>
    )
}

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
        borderColor:'#0063B2FF',
        height:45,
        marginVertical:10,
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
