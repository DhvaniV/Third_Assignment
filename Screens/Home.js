import React, { useState } from 'react'
import {View , Text  , Image , FlatList , StyleSheet, SafeAreaView , Dimensions} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
//import Logo from './Images/logo_1.png'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height


const Home = () => {

    const data = [
        {name : 'shirt' , imageSource : require('../Images/shirts.png') , key : '0'},
        {name : 'Pants' , imageSource : require('../Images/Pants.png') , key : '1'},
        {name : 'kids' , imageSource : require('../Images/kids.png') , key : '2'},
        {name : 'shoes' , imageSource : require('../Images/shoes.png') , key : '3'},
        {name : 'T-shirts' , imageSource : require('../Images/T-shirts.png') , key : '4'},
        {name : 'jackets' , imageSource : require('../Images/jackets.png') , key : '5'},
    ]

    const images = [
        'https://media.istockphoto.com/photos/women-clothes-hanging-on-hangers-clothing-rails-fashion-design-picture-id916092484?k=20&m=916092484&s=612x612&w=0&h=2aTLAucj_-qbbfhBiJEXfdiY3-k0gx0el8OrKFpi3O8=',
        'https://www.thoughtco.com/thmb/C7RiS4QG5TXcBG2d_Sh9i4hFpg0=/3620x2036/smart/filters:no_upscale()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij1vD8XhG7hU0EketUAuW7YMlndyj-L_ipA&usqp=CAU'
    ]

    const [dot , activedot] = useState(0)

    const onChange = (nativeEvent) => {
        if(nativeEvent){

            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if(slide !== dot){
                activedot(slide)
            }

        }

        

    }

    const navigation = useNavigation()
    return(
       
        <SafeAreaView style = {styles.container}>
             <View style = {{flexDirection : 'row'}}>
            <Ionicons
                name = 'menu'
                size={35}
                onPress = {() => navigation.openDrawer()}
                style = {styles.photox}
                
                />
            <Text style = {styles.Text}>Home</Text>

            </View>
            <View style = {styles.simage}>
                <ScrollView pagingEnabled
                 horizontal
                 showsHorizontalScrollIndicator = {false}
                 onScroll = {({ nativeEvent }) => onChange(nativeEvent)}
                  style = {styles.simage}>
                   {
                       images.map((ima , index) => (
                           <Image
                           key = {index}
                           source = {{uri : ima}}
                           style = {styles.s_image}/>
                       ))
                   }
                </ScrollView>
                <View style = {styles.dot}>
                    {
                        images.map((i,k) => 
                            <Text key = {i} style = {k == dot ? styles.actives : styles.dot_text}>
                            ⬤
                            </Text>

                        )
                    }
                   
                </View>
            </View>

            <Text style = {{color : 'orange' , alignSelf : 'center' , fontSize : 25 , fontWeight : 'bold'}}>Products</Text>

            <View style = {styles.item}>
               

            <FlatList 
            data = {data} renderItem={({item , index}) => (
                <View>
                    <Image style = {styles.image} source = {item.imageSource}/>
                    <Text style ={styles.text}>
                        {item.name}
                    </Text>
                </View>
            )}
            keyExtractor={item => item.key}
            numColumns={2}/>

            </View>
            <FlatList 
            data = {data} renderItem={({item , index}) => (
                <View>
                    <Image style = {styles.image} source = {item.imageSource}/>
                    <Text style ={styles.text}>
                        {item.name}
                    </Text>
                </View>
            )}
            keyExtractor={item => item.key}
            numColumns={2}/>
        </SafeAreaView>

        )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        
        
    },
    image : {
        height : 200,
        width : 190,
        flex : 1,
        alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10,
    marginHorizontal: 10,
    
       
       
    },
    text : {
        color : 'green',
        fontSize : 25,
        fontWeight : 'bold',
        

    },
   simage : {
       width : width,
       height : height * 0.30
   },
   s_image : {
    width : width,
    height : height * 0.30,
    resizeMode : 'cover'
},
dot : {
    flexDirection : 'row',
    position : 'absolute',
    bottom : 0,
    alignSelf : 'center',
},
dot_text : {
    color : '#888',
    margin : 3
},
actives : {
    color : '#fff',
    margin : 3
},
item: {
    padding:4,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10,
    marginHorizontal: 5,
    elevation: 5,
  },
  Text : {
    color : 'red',
    fontSize : 30,
    fontWeight : 'bold',
    alignSelf : 'center',
    
    
},
photox : {
  color : 'black',
  elevation : 5,
  fontWeight : 'bold',
  alignSelf : 'center',
 marginRight : 30,
  elevation : 3
},
})

export default Home