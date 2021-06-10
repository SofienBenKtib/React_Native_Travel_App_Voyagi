import React from 'react'
import { ScrollView,View, Text,StyleSheet,Dimensions,TouchableOpacity,Picker } from 'react-native'


const OPTIONS=['Monastir , Tunisie','Tunis , Tunisie','Paris , France','Lyon , France','Marseille , France',
                'Madrid , Espagne','Berlin , Allemagne','Frankfurt , Allemagne','Manama , Bahrain','Doha , Qatar','Alberta , Canada',
                'Quebec , Canada','Toronto , Canada']

const WIDTH=Dimensions.get('window').width
const HEIGHT=Dimensions.get('window').height                



const Departure = (props) => {


    const onPressItem = (option) =>{
        props.changeModalVisibility(false)
        props.setData(option)
    }


    const option=OPTIONS.map((item, index) => {
        
        return(
            <TouchableOpacity
            style={styles.option}
            key={index}
            onPress={()=>onPressItem(option)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>
    
            </TouchableOpacity>
        )
    })

    return (
        <View>
            <TouchableOpacity
            onPress={()=>props.changeModalVisibility(false)}
            style={styles.container}
            >
                <View style={[styles.modal,{width:WIDTH - 20,height:HEIGHT/2}]}>
                    <ScrollView>
                        {option}
                    </ScrollView>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    modal:{
        backgroundColor:'white',
        borderRadius:10,
        marginTop:'150%',
    },
    option:{
        alignItems: 'flex-start',
    },
    text:{
        margin:20,
        fontSize:20,
        fontWeight:'bold',
    }
})
export default Departure
