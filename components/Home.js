import React, {useState} from 'react'
import { View, Text,ScrollView,TouchableOpacity,StyleSheet, ImageBackground,TextInput,FlatList,Image} from 'react-native'
import {Feather} from '@expo/vector-icons'

const Home = () => {
    const image={uri:"https://www.10wallpaper.com/wallpaper/medium/1712/Banff_National_Park_Canada_Moraine_Lake_Travel_4K_Ultra_HD_medium.jpg"};
    const [gallery]= useState([
        {image: {uri:"https://i0.wp.com/images.wallpaperscraft.com/image/eiffel_tower_paris_france_122444_3840x2400.jpg?resize=650,400"},
        title:'Paris', key:'1'
        },
        {
        image:
        {uri:"https://wallpapercave.com/wp/wp4088746.jpg"},
        title:'Maldives',key:'2'
        },
        {
        image:
        {uri:"https://cdn.theculturetrip.com/wp-content/uploads/2017/02/cathedral-santa-maria-la-real-de-la-almudena-in-madrid-spain-650x426.jpg"},
        title:'Madrid',key:'3'
        },
        {
        image:
        {uri:"https://www.touropia.com/gfx/d/tourist-attractions-in-istanbul/suleymaniye_mosque.jpg?v=ae1eb6406413160eef07bb08418fe680"},
        title:'Istanbul',key:'4'
        },
        {
        image:
        {uri:"https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002533/img/basic/a0002533_main.jpg?20210122155600&q=80&rw=750&rh=536"},
        title:'Tokyo',key:'5'
        },
    ])
   
    return (
    <View  style={{flexGrow:1,height:'100%'}}>
    <View>
    <ImageBackground
    source={image}
    style={{width:'100%',height:270}}
    imageStyle={{borderBottomRightRadius:65}}
    >
    <View style={styles.DarkOverlay}></View>
    <View style={styles.searchContainer}>
        <Text style={styles.userGreet}>Hello !</Text>
        <Text style={styles.userText}>Where would you like to go today ?</Text>
    </View>
    <View>
        <TextInput
        style={styles.searchBox}
        placeholder='Search Destination'
        placeholderTextColor='#666'></TextInput>
        <Feather name='search' size={22} color='#666' style={{position:'absolute',top:30,right:60,opacity:0.6}}/>
    </View>
    </ImageBackground>

     </View>
     <ScrollView>
         <View style={{padding:20}}>
             <Text style={{fontSize:22,fontWeight:'bold'}}>Top Trending</Text>
         </View>
         <View>
             <FlatList
                 data={gallery}
                 horizontal={true}
                 style={{marginLeft:7}}
                 renderItem={({item}) =>{
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
         <View style={{marginBottom:60}}>
             <View style={{padding:20,flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{fontSize:22,fontWeight:'bold'}}>Our Recommendations</Text>
             </View>
             <ScrollView>
             <TouchableOpacity>
             <View style={{padding:3 , flex:1}}>
                <Image
                source={require('../assets/brazil.jpg')}
                style={{width:'92%',height:250,borderRadius:10,alignSelf:'center'}}
                 />
                 <View style={{position:'absolute',bottom:0,padding:16}}>
                 <View style={{flexDirection:'row'}}>
                 <Feather
                     name='map-pin'
                     color='white'
                     size={20}
                     style={{marginLeft:10,position:'relative',top:4}}
                 />
                 <Text style={{fontSize:22,color:'white',fontWeight:'normal',marginBottom:10,marginHorizontal:10}}>Rio de Janeiro , Brazil</Text>
                 </View>
                 
                 </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{padding:3 , flex:1}}>
                <Image
                source={require('../assets/monastir2.jpg')}
                style={{width:'92%',height:250,borderRadius:10,alignSelf:'center'}}
                 />
                 <View style={{position:'absolute',bottom:0,padding:16}}>
                 <View style={{flexDirection:'row'}}>
                 <Feather
                     name='map-pin'
                     color='white'
                     size={20}
                     style={{marginLeft:10,position:'relative',top:4}}
                 />
                 <Text style={{fontSize:22,color:'white',fontWeight:'normal',marginBottom:10,marginHorizontal:10}}>Monastir , Tunisia</Text>
                 </View>
                 
                 </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{padding:3 , flex:1}}>
                <Image
                source={require('../assets/canada.jpg')}
                style={{width:'92%',height:250,borderRadius:10,alignSelf:'center'}}
                 />
                 <View style={{position:'absolute',bottom:0,padding:16}}>
                 <View style={{flexDirection:'row'}}>
                 <Feather
                     name='map-pin'
                     color='white'
                     size={20}
                     style={{marginLeft:10,position:'relative',top:4}}
                 />
                 <Text style={{fontSize:22,color:'white',fontWeight:'normal',marginBottom:10,marginHorizontal:10}}>Alberta , Canada</Text>
                 </View>
                 
                 </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{padding:3 , flex:1}}>
                <Image
                source={require('../assets/usa.jpg')}
                style={{width:'92%',height:250,borderRadius:10,alignSelf:'center'}}
                 />
                 <View style={{position:'absolute',bottom:0,padding:16}}>
                 <View style={{flexDirection:'row'}}>
                 <Feather
                     name='map-pin'
                     color='white'
                     size={20}
                     style={{marginLeft:10,position:'relative',top:4}}
                 />
                 <Text style={{fontSize:22,color:'white',fontWeight:'normal',marginBottom:10,marginHorizontal:10}}>Arizona , USA</Text>
                 </View>
                 
                 </View>
            </View>
            </TouchableOpacity>
            </ScrollView>
         </View>
         
     </ScrollView>
    </View>
    )
}
const styles=StyleSheet.create({
    container:{
      flex: 1,
    },
    DarkOverlay:{
        position:'absolute',
        top:0,
        right:0,
        left:0,
        height:270,
        backgroundColor:'#000',
        opacity:0.2,
        borderBottomRightRadius:65,
    },
    userGreet:{
        fontSize:38,
        fontWeight:'bold',
        color:'white',
    },
    searchContainer:{
        paddingTop:100,
        paddingLeft:16,
    },
    searchBox:{
        marginTop:19,
        backgroundColor:'#fff',
        paddingLeft:24,
        padding:12,
        borderTopRightRadius:40,
        borderBottomRightRadius:40,
        width:'90%',
    },
    userText:{
        fontSize:16,
        fontWeight:'800',
        color:'white',
    },
    ImageOverlay:{
        width:150,
        height:250,
        marginRight:8,
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
    ImageText:{
        position:'absolute',
        color:'white',
        marginTop:4,
        fontSize:14,
        left:30,
        bottom:10,
    },
})
export default Home
