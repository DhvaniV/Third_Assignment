import React from 'react'
import {View , Text ,  FlatList, StyleSheet, Image , SafeAreaView, ScrollView , Button , TextInput} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Order_Screen = ({navigation}) => {

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
            <Text style = {styles.Text}>Order</Text>

            </View>
           

  
           
            <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={item => item.key}
                  showsVerticalScrollIndicator={false}
              />
             
                
                 <View style={styles.item}>
                 <TextInput placeholder='Enter Voucher code'
        style = {{color : 'black' , backgroundColor : 'grey' ,  marginTop :20}}/>
                <Text style = {{color : 'black' , fontSize : 20 , marginLeft : 55}}>APPLY</Text>
                 </View>


                  <Text style = {styles.totaltext}>
                      Totals
                  </Text>
                 
                  <View style={styles.item}>
          <View>
              <Text style = {{color : 'black'}}>SubTotal</Text>
              <Text  style = {{color : 'black'}}>Tax</Text>
              <Text  style = {{color : 'black'}}>discount</Text>
              <Text  style = {{color : 'black'}}>Total</Text>
          </View>
            <View>
                <Text  style = {{color : 'black' , marginLeft : 250}}>₹1000</Text>
                <Text  style = {{color : 'black' , marginLeft : 250}}>₹180</Text>
                <Text  style = {{color : 'black', marginLeft : 250}}>₹100</Text>
                <Text  style = {{color : 'black', marginLeft : 250}}>₹1080</Text>
            </View>
           
        </View>
  
                  
              
  
            
  
        </SafeAreaView>
      )
     
  } 
  


  const styles = StyleSheet.create({

    container : {
        flex : 1,
        backgroundColor : 'white'
    },
   
    item: {
        
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        marginHorizontal: 10,
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
      
      
      
      cart_text : {
          color : 'black',
          alignSelf : 'center',
          fontSize : 25,

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
     
      totaltext : {color : 'black' , fontSize : 20 , fontWeight : 'bold' , justifyContent : 'center' , alignSelf : 'center'},
    

    

})

export default Order_Screen