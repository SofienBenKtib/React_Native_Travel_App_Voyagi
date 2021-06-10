import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity,SafeAreaView } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

const Contactus = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputView}>
            <Icon
                color='#add8e6'
                name="mail"
                size={20}
            />
            <TextInput
                style={{
                    flex:1,
                    paddingHorizontal:0,
                    borderBottomColor:'#add8e6',
                    borderBottomWidth:1,
                    marginLeft:10,
                   
                }}
                placeholder={'Email'}
            />
            </View>
            <View style={styles.inputView}>
            <Icon
                color='#add8e6'
                name="bulb"
                size={20}
            />
            <TextInput
                style={{
                    flex:1,
                    paddingHorizontal:0,
                    borderBottomColor:'#add8e6',
                    borderBottomWidth:1,
                    marginLeft:10,
                }}
                placeholder={'Subject'}
            />
            </View>
            <View style={styles.inputView}>
            <Icon
                color='#add8e6'
                name="md-mail-open"
                size={20}
            />
            <TextInput
                style={{
                    flex:1,
                    paddingHorizontal:0,
                    borderBottomColor:'#add8e6',
                    borderBottomWidth:1,
                    marginLeft:10,
                }}
                placeholder={'Your message'}
                multiline={true}
            />
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Send</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Contactus

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    inputView:{
        width:'100%',
        height:60,
        borderRadius:5,
        paddingHorizontal:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:7,
        justifyContent:'space-between',
        
    },
    btn:{
        flexDirection:'row' ,
         width:135,
         height:45,
         marginHorizontal:10,
         borderRadius:5,
         backgroundColor:'#add8e6',
         marginTop:15,
    },
    btnText:{
        color:'white',
        alignContent:'center',
        marginVertical:10,
        marginHorizontal:50,
        fontSize:18,
    },
})
