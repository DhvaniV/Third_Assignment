import React , {useState} from 'react'
import {View , Text , Button , StyleSheet , TextInput , Image , Pressable , Modal} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import RadioForm , {RadioButton , RadioButtonInput , RadioButtonLabel} from 'react-native-simple-radio-button'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Edit_Profile = ( {navigation } ) => {

    const [firstname,setFirstName] = useState("");
    const [lastname,setLastName] = useState("");
    const [about,setabout] = useState("");
    const [gender,setgender] = useState("");
    const [imageUri , setimageUri] = useState("xyz")
    const [modal , setmodal] = useState(false)
    
   
   

    
    const profile = () =>{
        navigation.navigate('Profile' , {
            firstname : firstname,
            lastname : lastname,
            about : about,
            gender : gender,
            imageUri : imageUri,
            
        })
    }
   
    var Gender = [

        {label : 'Male' , value : 'male'},
        {label : 'Female' , value : 'female'},
    ]
       
   const openCamera = () =>{
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        }).then(image => {
         setimageUri(image.path)
          //navigation.setParams({imageUri:imageUri})
        });
        }

       const openGallery = () =>{
            ImagePicker.openPicker({
              width: 300,
              height: 400,
              cropping: true
            }).then(image => {
                setimageUri(image.path)
              //navigation.setParams({imageUri:imageUri})
            })
          
           
            }
    
    return (
       <View style = {styles.container}>

           <Modal visible = {modal}  animationType='slide'>

           <View style = {styles.items}>
               <Pressable
               onPress = {openCamera}>
               <Text style = {styles.photo}>Open Camera</Text>
               </Pressable>
               <Pressable
               onPress = {openGallery}>
               <Text style = {styles.photo}>Choose Photo from Gallery</Text>
               </Pressable>
               
                <Ionicons
                name = 'close'
                size={55}
                onPress = {() => setmodal(false)}
                 style = {styles.photox}
                />
           </View>

           </Modal>
         


            <View style = {styles.imageView}>
                <Pressable
                onPress = {() => setmodal(true)}>

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
                 </Pressable>
            </View>

                    

                
              
            

           <TextInput
           placeholder="Enter FirstName"
           value={firstname}
           style = {styles.Text}
           onChangeText={(text) => setFirstName(text)}
           />

            <TextInput
           placeholder=" Enter LastName"
           value={lastname}
           style = {styles.Texts}
           type = "email"
           onChangeText={(text) => setLastName(text)}/>
            <View style = {styles.genderView}>

            <RadioForm
           radio_props={Gender}
           initial = {'male'}
          buttonSize = {10}
          buttonOuterSize = {20}
          selectedRadioColor={'green'}
          disable={true}
          selectedLabelColor = {"darkgreen"}
          onPress={(value) => { setgender(value) }}/>

            </View>
          
        
        <TextInput 
        multiline = {true}
        editable = {true}
        placeholder="Write about yourself"
        value={about}
        style = {styles.Texts}
        onChangeText={(text) => setabout(text)}
        />


           <Button title = "Go to Profile" onPress={profile}
           style = {styles.button}/>

       </View>
    )
}

const styles = StyleSheet.create({

    Text : {
        color : 'black',
        fontSize : 15,
        backgroundColor : 'grey',
        marginHorizontal : 10,
        marginTop : 20,
    },
    Texts: {
        color : 'black',
        fontSize : 15,
        backgroundColor : 'grey',
        marginHorizontal : 10,
        marginTop : 20,
        marginBottom : 20
    },

    container: {
        
        flex: 1,
        backgroundColor: 'white',
        marginTop: 10,
        marginHorizontal: 10,
        elevation: 10,
      },
      genderView: {
        
       
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
      photo : {
        color : 'orange',
         fontSize : 20,
         fontWeight : 'bold',
         alignSelf : 'center',
         marginVertical : 30,
         elevation : 3
      },
      photox : {
        color : 'orange',
        elevation : 5,
        fontWeight : 'bold',
        alignSelf : 'center',
        marginVertical : 30,
        elevation : 3
     },
     items: {
        padding:4,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        marginHorizontal: 5,
        elevation: 5,
      },
     
     
})

export default Edit_Profile