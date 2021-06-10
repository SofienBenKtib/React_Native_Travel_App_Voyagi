import React , { useState , useEffect}from 'react'
import { Picker } from 'react-native';
import { View, Text,TextInput,FlatList, StyleSheet,SafeAreaView,TouchableOpacity,ActivityIndicator,BackHandler,Modal,Button} from 'react-native'
import Departure from './Departure';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker'
  const Item = ({item}) => (
    <View>
    <TouchableOpacity>
      <Text style={styles.itemId}>{item.id.toUpperCase()}{' '}</Text>
      <Text style={styles.item}>{item.title}</Text>
      
    </TouchableOpacity>
    <View style={styles.line}>
    </View>
    </View>
  );
        
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

 //Datepicker settings

 



  const OneWay = () => {

    const [departure,setDeparture]=useState('')
    const [chooseDep, setChoosedep] = useState('Choose departure')
    const [chooseArr, setChoosearr] = useState('Choose arrival')
   const [date, setDate] = useState('')
    const setData = (option) => {
      setChoosedep(option)
    }
    const [selectedValue, setSelectedValue] = useState('Choose departure : ');
    const [selectedArrival,setSelectedArrival]=useState('');
    const [selectedPersons, setselectedPersons] = useState(1);
    const [selectedClass, setselectedClass] = useState('');
    const [submit, setSubmit] = useState(false)
 //   const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
      return (
        <SafeAreaView style={styles.container}>
         
         <View style={styles.search}>
      <MaterialIcons name="flight-takeoff" 
             size={24} 
             color="grey" />
      <Picker
        selectedValue={selectedValue}
        style={{ height: 30, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
         
        <Picker.Item label="Choose departure" value="disabled" color="#aaa"/>
        <Picker.Item label="Monastir , Tunisia" value="Mon" />
        <Picker.Item label="Tunis , Tunisia" value="Tun" />
        <Picker.Item label="Paris , France" value="Par" />
        <Picker.Item label="Lyon , France" value="Lyo" />
        <Picker.Item label="Marseille , France" value="Mar" />
        <Picker.Item label="Madrid , Spain" value="Mad" />
        <Picker.Item label="Berlin , Germany" value="Ber" />
        <Picker.Item label="Frankfurt , Germany" value="Fra" />
        <Picker.Item label="Manama , Bahrain" value="Man" />
        <Picker.Item label="Doha , Qatar" value="Doh" />
        <Picker.Item label="Alberta , Canada" value="Alb" />
        <Picker.Item label="Toronto , Canada" value="Tor" />
        <Picker.Item label="Quebec , Canada" value="Qeb" /> 

      </Picker>
      
      </View>

        <View style={styles.search}>
      <MaterialIcons name="flight-land" 
             size={24} 
             color="grey" />
      <Picker
        selectedValue={selectedArrival}
        style={{ height: 30, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setSelectedArrival(itemValue)}
      >
         
        <Picker.Item label="Choose arrival" value="arrival" color="#aaa"/>
        <Picker.Item label="- Popular cities -" value="disabled" color="#aaa"/>
        <Picker.Item label="Monastir , Tunisia" value="Mon" />
        <Picker.Item label="Tunis , Tunisia" value="Tun" />
        <Picker.Item label="Paris , France" value="Par" />
        <Picker.Item label="Lyon , France" value="Lyo" />
        <Picker.Item label="Marseille , France" value="Mar" />
        <Picker.Item label="Madrid , Spain" value="Mad" />
        <Picker.Item label="Berlin , Germany" value="Ber" />
        <Picker.Item label="Frankfurt , Germany" value="Fra" />
        <Picker.Item label="Manama , Bahrain" value="Man" />
        <Picker.Item label="Doha , Qatar" value="Doh" />
        <Picker.Item label="Alberta , Canada" value="Alb" />
        <Picker.Item label="Toronto , Canada" value="Tor" />
        <Picker.Item label="Quebec , Canada" value="Qeb" />
        <Picker.Item label="- Other destinations -" value="disabled" color="#aaa"/>
        <Picker.Item label="Tokyo , Japan" value="Tok" />
        <Picker.Item label="Singapore , Singapore" value="Sin" />
        <Picker.Item label="Malé , Maldives" value="Mal" />
        <Picker.Item label="Istanbul , Turkey" value="Ist" />
        <Picker.Item label="Rio de Janeiro , Brazil" value="Bra" />
        <Picker.Item label="Cairo , Egypt" value="Egy" />
      </Picker>
      
      </View>

     <View style={styles.search}>
      <MaterialIcons name="date-range" size={24} color="grey" />
      <DatePicker
      style={{width:'80%'}}
      date={date}
      placeholder='Select date'
      format='DD-MM-YYYY'
      confirmBtnText='Confirm'
      cancelBtnText='Cancel'
      onDateChange={(d)=>setDate(d)}
      showIcon={false}
      />
      </View>

      <View style={styles.search}>
      <Fontisto name="persons" size={24} color="grey" />
      <Picker
        selectedValue={selectedPersons}
        style={{ height: 30, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setselectedPersons(itemValue)}
      >
         
        <Picker.Item label="Select the number of persons" value="nmbr" color="#aaa"/>
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
      </Picker>
      
      </View>

      <View style={styles.search}>
      <Ionicons name="briefcase-outline"size={24}color="grey" />
      <Picker
        selectedValue={selectedClass}
        style={{ height: 30, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setselectedClass(itemValue)}
      >
         
        <Picker.Item label="Choose class" value="disabled" color="#aaa"/>
        <Picker.Item label="Economy" value="Eco" />
        <Picker.Item label="First class" value="Frs" />
        <Picker.Item label="Business class" value="Bus" />
        <Picker.Item label="Premium Economy" value="Pre" />
      </Picker>
      
      </View>
     
            <TouchableOpacity style={styles.button}
            onPress={()=>setSubmit(!submit)}>
              <Text style={styles.buttonText}>Search Flights</Text>
              {submit ? (
                <ActivityIndicator
                style={{marginLeft:200,bottom:15}}
                color='white'
                size='small'/>
              ) : null}
            </TouchableOpacity>
          
          
        </SafeAreaView>
        
    )
}
  
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    search:{
        borderBottomColor:'white',
        marginTop:10,
        borderBottomWidth:1,
        padding:'2%',
        paddingBottom:'5%',
        flexDirection:'row',
        alignItems: 'center',
        textAlign:'center',
    },
    item:{
        fontSize:20,
        padding:'3%',
        marginLeft:50,
    },
    scr:{
        flex:1,
    },
    load:{
        alignItems:'center',
        justifyContent:'center',
    },
    itemId:{
      color:'white',
      top:30,
      left:10,
      backgroundColor:'grey',
      borderRadius:5,
      marginRight:320,
      textAlign:'center',
      fontSize:16,
      
    },
 
   text:{
    fontSize:16,
    paddingLeft:30,
    flexDirection:'row',
    display:'flex',
   },
   button:{
     width:'100%',
     backgroundColor:'orange',
     height:55,
     position:'absolute',
     bottom:0,
     left:0,
     elevation:10,
     shadowColor:'black',
     shadowOpacity:0.8,
     shadowOffset : { width: 1, height: 13},
   },
   buttonText:{
     color:'white',
     fontSize:30,
     textAlign:'center',
     top:10,
   },
   piker:{
     display:'flex',
   },

})
export default  OneWay