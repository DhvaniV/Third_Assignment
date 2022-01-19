import React from 'react'
import {View , Text ,  FlatList, StyleSheet, Image , SafeAreaView, ScrollView , Button , TextInput} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Cart_Screen = ({navigation}) => {

    const data = [
        {name:'Shoes', price: 700, image:require('../Images/shoes.png'), quantity: 1, key: '0'},
        {name:'shirt', price: 300, image:require('../Images/shirts.png'), quantity: 2, key: '1'},
    ]

    const renderItem = ({ item, index }) => {
        return <View style={styles.item}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={item.image}
            />
            <View>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.price+" ₹"}</Text>
            </View>
            <View style={styles.cart}>
                <MaterialCommunityIcons name="minus-circle-outline" color='#C6C6C9' size={26} />
                <Text >{item.quantity}</Text>
                <MaterialCommunityIcons name="plus-circle-outline"color='#C6C6C9' size={26} />
                <MaterialCommunityIcons name="close-circle-outline" color='#C6C6C9' size={26} style={styles.close}/>
            </View>
        </View>
    }

    return (

      <SafeAreaView style = {styles.container}>
          <View style = {{flexDirection : 'row'}}>
            <Ionicons
                name = 'menu'
                size={35}
                onPress = {() => navigation.openDrawer()}
                style = {styles.photox}
                
                />
            <Text style = {styles.Text}>Cart</Text>

            </View>
           

         
          <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                showsVerticalScrollIndicator={false}
            />
           
               
                <View style = {styles.subtotals}>
                    <Text style = {styles.subtotaltext}>
                        Total
                    </Text>
                    <Text style = {styles.price}>
                    ₹1000
                    </Text>


                </View>

            

                <Button title = 'Order' onPress = {() => navigation.navigate('Order')} />
            

          

      </SafeAreaView>
    )
   
} 

const styles = StyleSheet.create({

    container : {
        flex : 1,
        backgroundColor : 'white'
    },
    content : {
        marginHorizontal : 29,
        paddingBottom : 32

    },
    item: {
        padding:10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        marginHorizontal: 6,
        elevation: 10,
      },
      image: {
        width: 200,
        height: 200
      },
      text: {
        color: '#001D32',
        fontWeight:'bold',
        textTransform: 'capitalize',
        padding: 4
      },
      cart:{flexDirection:'row', flex:1, justifyContent:'flex-end', padding:6},
      
      close:{
          marginLeft:18
      },
      cart_text : {
          color : 'black',
          alignSelf : 'center',
          fontSize : 25,

      },
     
      totaltext : {color : 'black' , fontSize : 20 , fontWeight : 'bold' , justifyContent : 'center' , alignSelf : 'center'},
      subtotals : {flexDirection:'row', flex:1, height : 1 , borderColor : '#ddddddd' , marginHorizontal : 16    },
      subtotaltext : {color : 'black' , fontSize : 16},
      price : {color : 'black' , fontSize : 18 , marginLeft : 30},
      

    Voucher : {

        opacity : 0.6,
        color : '#707070',
        fontSize : 16,
        borderColor : 'black',
        borderWidth : 2,
      
    },
    photox : {
        color : 'black',
        elevation : 5,
        fontWeight : 'bold',
        alignSelf : 'center',
       marginRight : 40,
        elevation : 3
     },
     Text : {
        color : 'red',
        fontSize : 30,
        fontWeight : 'bold',
        alignSelf : 'center',
        
        
    },
    

})

export default Cart_Screen