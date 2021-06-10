import React,{useState} from 'react'
import { View, Text,StyleSheet,ScrollView,FlatList,TouchableOpacity,Image,TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons'
import Header from './Header'
import Home from './Home'

const screen={
  Home:{
    screen:Home,
    navigationOptions:{
      headerTitle: () =><Header/>
    }
  }
}
const Explore = ({navigation}) => {
  const[gallery]=useState([
    {image :{
      uri:"https://exp.cdn-hotels.com/hotels/17000000/16720000/16718500/16718450/9448ba45_z.jpg?impolicy=fcrop&w=500&h=333&q=high"},
      title:'Monastir',key:'1'
    },
    {image :{
      uri:"https://upload.wikimedia.org/wikipedia/commons/2/2c/Sidi_Bou_Said_at_night.jpg"},
      title:'Sidi Bou Said',key:'2'
    },
    {image :{
      uri:"https://static.traveltek.net/uploaded/2015/1/1422637072.jpg"},
      title:'Djerba',key:'3'
    },
    {image :{
      uri:"https://i.ytimg.com/vi/zrIj88Y0VIE/maxresdefault.jpg"},
      title:'Haouaria',key:'4'
    },
    {image :{
      uri:"https://s3-eu-west-1.amazonaws.com/mahdia-website/Mahdia.jpg"},
      title:'Mahdia',key:'5'
    },
  ])
  const [free]= useState([
    {image: {uri:"https://lp-cms-production.imgix.net/news/2019/01/shutterstockRF_1037036482.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850"},
    title:'Egypt', key:'1'
    },
    {
    image:
    {uri:"http://www.caciquetribe.com/wp-content/uploads/2016/03/morocco1.jpg"},
    title:'Morocco',key:'2'
    },
    {
    image:
    {uri:"https://pointmetotheplane.boardingarea.com/wp-content/uploads/2018/10/shutterstock_721552321.jpg"},
    title:'Turkey',key:'3'
    },
    {
    image:
    {uri:"https://www.weddinginparadise.it/wp-content/uploads/2013/05/31/Likuliku-013.jpg"},
    title:'Guinea',key:'4'
    },
    {
    image:
    {uri:"https://s23444.pcdn.co/wp-content/uploads/2019/10/14-ilhote-3-800x536-1.jpg.optimal.jpg"},
    title:'Brazil',key:'5'
    },
    {
    image:
    {uri:"https://sgp1.digitaloceanspaces.com/tz-mag-ph/wp-content/uploads/2018/06/101006062525/tourist-arrivals-770x512.jpeg"},
    title:'Philippines',key:'6'
    },
    {
    image:
    {uri:"https://i.pinimg.com/originals/82/35/04/823504c09bc9d9477c97cb0de64e23f8.jpg"},
    title:'Indonesia',key:'7'
    },
    {
    image:
    {uri:"https://foodtank.com/wp-content/uploads/2020/10/Food-Tank_NorthKoreanRestaurants-Defectors-ComfortSeoulFoodSecurity.jpg"},
    title:'South Korea',key:'8'
    },
])
const[family]=useState([
  {image :{
    uri:"https://www.tripsavvy.com/thmb/EI5Lsv0Faj3S3I9APfKDlrRi_gQ=/3629x2722/smart/filters:no_upscale()/agia-galini---crete-158739909-5b3411e146e0fb0037ec8497.jpg"},
    title:'Crete , Greece',key:'1'
  },
  {image :{
    uri:"https://lp-cms-production.imgix.net/features/2019/08/5senses_LaPaz_Bolivia-3c331d6c6ffc.jpg"},
    title:'Bolivia',key:'2'
  },
  {image :{
    uri:"https://cdn-images.go2africa.com/wp-content/uploads/2020/03/06104227/cape_town_aerial_go2africa.jpg"},
    title:'South Africa',key:'3'
  },
  {image :{
    uri:"https://www.sortiraparis.com/images/80/76154/455912-laurentp-disneyland-paris.jpg"},
    title:'DisneyLand , Paris',key:'4'
  },
  {image :{
    uri:"https://www.travelandleisure.com/sites/default/files/styles/1600x1000/public/1434385487/ATTRACTIONS0615-machu-picchu.jpg?itok=H-P-lyy8"},
    title:'Peru',key:'5'
  },
])
  const[honeymoon]=useState([
    {image :{
      uri:"https://www.romeprivateguides.com/upload/CONF87/20190607/most-romantic-places-venice-tSa-1130X600.jpg"},
      title:'Venice , Italy',key:'1'
    },
    {image :{
      uri:"https://content.tripster.com/travelguide/wp-content/uploads/2018/11/Dropbox_ThinkstockPhotos-969507796-1024x683.jpg"},
      title:'Hawaii',key:'2'
    },
    {image :{
      uri:"http://marquezfiveadventures.com/wp-content/uploads/2018/05/punta-mita-0118-5.jpg"},
      title:'Punta Mita, Mexico',key:'3'
    },
    {image :{
      uri:"https://s3.eu-central-1.amazonaws.com/wps-lakecomotravel.com/wp-content/uploads/2019/07/lake-como-weather-varenna-summer.jpg"},
      title:'Lake Como , Italy',key:'4'
    },
    {image :{
      uri:"https://cdn.britannica.com/57/99557-050-213502D2/Hut-dwellings-Bora-Bora-Society-Islands-French-Polynesia.jpg"},
      title:'Bora Bora, Polynesia',key:'5'
    },
])
    const destinations={uri:"https://academic.vatel.com.es/pluginfile.php/2070/course/overviewfiles/Tourism%20%20travelES%20y%20GB.jpg"};
    const Data = [
      {
        id: "Tun",
        title: "Tunis, Tunisia",
      },
      {
        id: "Mon",
        title: "Monastir, Tunisia",
      },
      {
        id: "Mad",
        title: "Madrid, Spain",
      },
      {
        id: "Bar",
        title: "Barcelona, Spain",
      },
      {
          id: "Ber",
          title: "Berlin, Germany",
        },
        {
          id: "Par",
          title: "Paris, France",
        },
        {
          id: "Lyo",
          title: "Lyon, France",
        },
        {
          id: "Mar",
          title: "Marseille, France",
        },
        {
          id: "Doh",
          title: "Doha, Qatar",
        },
        {
          id: "Man",
          title: "Manama, Bahrain",
        },
        {
          id: "Alb",
          title: "Alberta, Canada",
        },
        {
          id: "Tor",
          title: "Toronto, Canada",
        },
        {
          id: "NY",
          title: "New York, USA",
        },
    ];

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

    const [destination,setDestination]=useState('')
    return (
      <View style={{flexGrow:1,height:'100%'}}>
    
    <View style={styles.DarkOverlay}></View>
    <View style={styles.searchContainer}>
    <Text style={styles.userGreet}>Search</Text>
    </View>
    <View>
        <TextInput
        style={styles.searchBox}
        placeholder='Find Your Destination'
        placeholderTextColor='#666'></TextInput>
        <Feather name='search' size={22} color='#666' style={{position:'absolute',right:60,opacity:0.6,top:13}}/>
    </View>
    
    <ScrollView>
      
      <View style={{padding:20,flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{fontSize:22,fontWeight:'bold'}}>Explore Tunisia</Text>
      </View>
      <FlatList
        data={gallery}
        horizontal={true}
        style={{marginLeft:7}}
        renderItem={({item}) => {
          return(
                         <View styles={{paddingVertical:20, paddingLeft:16}}>
                             <TouchableOpacity>
                                 <Image source={item.image} style={{width:150,marginRight:14,height:250,borderRadius:10}}/>
                                 <View style={styles.ImageOverlay}></View>
                                 <Feather name='map-pin' size={16} color='white'
                                     style={styles.imageLocationIcon}/>
                                 <Text style={styles.ImageText}>{item.title}</Text>
                             </TouchableOpacity>
                         </View>
                     )
        }}
      />
      <View style={{padding:20,flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{fontSize:22,fontWeight:'bold'}}>Visa Free Countries</Text>
      </View>
      <FlatList
        data={free}
        horizontal={true}
        style={{marginLeft:7}}
        renderItem={({item}) => {
          return(
                         <View styles={{paddingVertical:20, paddingLeft:16}}>
                             <TouchableOpacity>
                                 <Image source={item.image} style={{width:150,marginRight:14,height:250,borderRadius:10}}/>
                                 <View style={styles.ImageOverlay}></View>
                                 <Feather name='map-pin' size={16} color='white'
                                     style={styles.imageLocationIcon}/>
                                 <Text style={styles.ImageText}>{item.title}</Text>
                             </TouchableOpacity>
                         </View>
                     )
        }}
      />
      <View style={{padding:20,flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{fontSize:22,fontWeight:'bold'}}>Family Trips</Text>
      </View>
      <FlatList
        data={family}
        horizontal={true}
        style={{marginLeft:7}}
        renderItem={({item}) => {
          return(
                         <View styles={{paddingVertical:20, paddingLeft:16}}>
                             <TouchableOpacity>
                                 <Image source={item.image} style={{width:150,marginRight:14,height:250,borderRadius:10}}/>
                                 <View style={styles.ImageOverlay}></View>
                                 <Feather name='map-pin' size={16} color='white'
                                     style={styles.imageLocationIcon}/>
                                 <Text style={styles.ImageText}>{item.title}</Text>
                             </TouchableOpacity>
                         </View>
                     )
        }}
      />
      <View style={{padding:20,flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{fontSize:22,fontWeight:'bold'}}>Honeymoon</Text>
      </View>
      <View>
      <FlatList
        data={honeymoon}
        horizontal={true}
        style={{marginLeft:7}}
        renderItem={({item}) => {
          return(
                         <View styles={{paddingVertical:20, paddingLeft:16}}>
                             <TouchableOpacity>
                                 <Image source={item.image} style={{width:150,marginRight:14,height:250,borderRadius:10}}/>
                                 <View style={styles.ImageOverlay}></View>
                                 <Feather name='map-pin' size={16} color='white'
                                     style={styles.imageLocationIcon}/>
                                 <Text style={styles.ImageText}>{item.title}</Text>
                             </TouchableOpacity>
                         </View>
                     )
        }}
      />
      </View>
    </ScrollView>
    </View>
    
    )
}
const styles=StyleSheet.create({
    container:{
      flex: 1,
    },
    ImageText:{
      position:'absolute',
      color:'white',
      marginTop:4,
      fontSize:14,
      left:30,
      bottom:10,
      fontWeight:'bold',
  },
  ImageOverlay:{
    width:150,
    height:250,
    marginRight:18,
    borderRadius:10,
    position:'absolute',
    opacity:0.2,
},
imageLocationIcon:{
    position:'absolute',
    marginTop:4,
    left:10,
    bottom:10,
},
searchContainer:{
  paddingLeft:16,
},
searchBox:{
  backgroundColor:'#fff',
  padding:10,
  borderRadius:40,
  width:'95%',
  marginLeft:10,
  marginRight:10,
},
userText:{
  fontSize:16,
  fontWeight:'800',
  color:'white',
},
DarkOverlay:{
  position:'absolute',
  top:0,
  right:0,
  left:0,
  height:270,
  //backgroundColor:'#000',
  opacity:0.2,
  borderBottomRightRadius:65,
    },
    userGreet:{
      fontSize:38,
      fontWeight:'bold',
      color:'white',
      bottom:160,
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
  item:{
    fontSize:20,
    padding:'3%',
    marginLeft:50,
},
})
export default Explore
