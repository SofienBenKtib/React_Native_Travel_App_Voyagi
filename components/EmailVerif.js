import React from 'react'
import {View, Button, TextInput,Text} from 'react-native'

class EmailVerif extends React.Component{
   
    constructor(){
        super();
        this.state={
            email:'',
        }
    }
    submit(){
        console.warn(this.state)
    }
  
    render(){
        return(
            <View>
                <Text>{this.state.emailError}</Text>
            </View>
        )
    }
}