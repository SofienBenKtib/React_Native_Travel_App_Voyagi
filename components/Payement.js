import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Payement = () => {
    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Image
                    source={require('../assets/mastercard.png')}
                    style={styles.img}
                />
                <Text style={styles.txt}>MasterCard</Text>
            </View>
            <View style={styles.block}>
                <Image
                    source={require('../assets/visa.png')}
                    style={styles.img}
                />
                <Text style={styles.txt}>Visa</Text>
            </View>
            <View style={styles.block}>
                <Image
                    source={require('../assets/paypal.png')}
                    style={styles.img}
                />
                <Text style={styles.txt}>Paypal</Text>
            </View>
            <View style={styles.block}>
                <Image
                    source={require('../assets/edinar.png')}
                    style={styles.img}
                />
                <Text style={styles.txt}>E-Dinar</Text>
            </View>
           
        </View>
    )
}

export default Payement

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'flex-start',
    },
    block:{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        marginLeft:10,
    },
    img:{
        width:100,
        height:100,
        
       
    },
    txt:{
        fontWeight:'400',
        fontSize:25,
        marginLeft:15,
        padding:25,
        
    },
})
