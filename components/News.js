import React from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity,SafeAreaView,Alert } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";



const News = ({navigation}) => {
    return (
    <SafeAreaView style={styles.container}>
    <View style={styles.titleView}>
    <Text style={styles.title}>Subscribe to our Newsletter!</Text>
    </View>
      
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
            <TouchableOpacity style={styles.btn}
            onPress={()=>Alert.alert(
              "Subscribed successfully !",
              "You'll be receiving news from us from now on ",
              [
                {
                  text:"OK",
                  onPress:()=>navigation.navigate('Home'),
                }
              ]
            )}>
              <Text style={styles.btnText}>
                Subscribe
              </Text>
            </TouchableOpacity>
    </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    title:{
      fontSize:30,
      fontWeight:'400',
      justifyContent:'center',
    },
    inputView:{
      width:'90%',
      height:100,
      borderRadius:5,
      paddingHorizontal:0,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      marginBottom:100,
      
  },
  btn:{
      flexDirection:'row' ,
       width:135,
       height:45,
       marginHorizontal:10,
       borderRadius:5,
       backgroundColor:'#add8e6',
      
  },
  btnText:{
      color:'white',
      alignContent:'center',
      marginVertical:9,
      marginHorizontal:20,
      fontSize:23,
  },
  titleView:{
    marginBottom:100,
  }
})
export default News
