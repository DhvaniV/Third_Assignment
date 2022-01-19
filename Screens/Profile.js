import React , {useState , useEffect}  from 'react'
import {View , Text , TextInput , Button , StyleSheet , Image} from 'react-native'


const Profile = ( {navigation , route } ) => {
    // var {name , email , age} = "" 
    // console.log(route)
    // route.params != undefined ? {name , email , age} = route.params : null
    const [firstname, setFirstName ]= useState("xyz")
    const [lastname, setLastName ]= useState("xyz@01gmail.com")
    const [about, setabout ]= useState("Doctor")
    const [gender, setgender ]= useState("female")
    const [imageUri, setimageUri ]= useState("xyz")
    
    
  
    useEffect(() => {
        if(route.params != undefined){
        console.log(route)
        setFirstName(route.params.firstname)
        setLastName(route.params.lastname)
        setabout(route.params.about)
        setgender(route.params.gender)
        setimageUri(route.params.imageUri)
    }
 } , [] )
    
    return(

        <View style = {styles.item}>
            <View style = {styles.imageView}>
            {imageUri == 'xyz' ?
                        <Image
                            source={require('../Images/user.png')}
                            style={styles.image}
                        /> :
                        <Image
                            source={{ uri: imageUri }}
                            style={styles.image}
                        />
                    }


            </View>
        <Text style = {styles.Text}>Name: {firstname} </Text>
        <Text  style = {styles.Text}>LastName: {lastname}</Text>
        <Text style = {styles.Text}>About : {about}</Text>
        <Text style = {styles.Texts}>Gender : {gender}</Text>
    
        <Button title = 'Edit Profile' onPress={() => navigation.replace('Edit_Profile')}/>

    </View>

    )

   
}

const styles = StyleSheet.create ({

    Text : {
        fontSize : 20,
       color : 'black',
       marginHorizontal : 10,
       marginTop : 20,
      

    },
    item: {
        
        flex: 1,
        backgroundColor: 'white',
        marginTop: 10,
        marginHorizontal: 10,
        elevation: 10,
      },
      imageView : {
        
        backgroundColor: 'white',
        marginTop: 10,
        marginHorizontal: 10,
       

       
        

      },
      image : {
          resizeMode : 'contain',
          height :100,
          width : 100,
          alignSelf : 'center'

      },
      Texts: {
        color : 'black',
        fontSize : 20,
        
        marginHorizontal : 10,
        marginTop : 20,
        marginBottom : 20
    },

     
})


    



export default  Profile


 