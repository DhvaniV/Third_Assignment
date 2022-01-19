import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'


const Products = () => {

    const data = [
        {name:'Jacket', image : require ('../Images/jackets.png') , price: 700 ,  key: '0'},
        {name:'Shoes',image : require ('../Images/shoes.png') , price: 500, key: '1'},
        {name:'Pant',image : require ('../Images/Pants.png') , price: 8000,  key: '2'},
        {name:'Shirt',image : require ('../Images/shirts.png') , price: 600, key: '3'},
        {name:'T-shirts',image : require ('../Images/T-shirts.png') , price: 600, key: '4'},
        {name:'Jacket', image : require ('../Images/jackets.png') , price: 700 ,  key: '5'},
        {name:'Shoes',image : require ('../Images/shoes.png') , price: 500, key: '6'},
        {name:'Pant',image : require ('../Images/Pants.png') , price: 8000,  key: '7'},
        {name:'Shirt',image : require ('../Images/shirts.png') , price: 600, key: '8'},
        {name:'T-shirts',image : require ('../Images/T-shirts.png') , price: 600, key: '9'},
       
       
       
    ]

    const renderItem = ({ item, index }) => {
        return <View style={styles.item}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={item.image}
            />
            <View style={styles.detail}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{"₹ "+item.price}</Text>
            </View>
        </View>
    }

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style = {{flexDirection : 'row'}}>
            <Ionicons
                name = 'menu'
                size={35}
                onPress = {() => navigation.openDrawer()}
                style = {styles.photox}
                
                />
            <Text style = {styles.Text}>Products</Text>

            </View>
           
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 10
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
      image: {
        width: 200,
        height: 200
      },
      text: {
        color: '#001D32',
        fontWeight:'800',
        textTransform: 'capitalize',
        padding: 4,
      },
      detail:{marginHorizontal:4},
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

export default Products