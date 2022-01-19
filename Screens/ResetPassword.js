import React , {useState} from 'react';
import { 
  SafeAreaView
, StyleSheet ,View , Text , Image , TextInput , Button , TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'

const ResetPassword = () => {
    const [password , setpassword] = useState('')
    const [resetpassword , setresetpassword] = useState('')

    const navigation = useNavigation()

    const [data , setData] = React.useState({
        isvalidpassword : true,
    })
    const [isvalid , setisvalid] = useState(false)

    const handlevalidpassword = () =>{
        if(password == resetpassword){
            setData({
                ...data,
                isvalidpassword : true
            })
            setisvalid(true)
        }
        else{
            setData({
                ...data,
                isvalidpassword : false
            })
        }
    }

    const success = () =>{
        if(isvalid){
            alert("confirmed")
        }
        else{
            alert("password and repassword should be same")
        }
    }
   
  return (
   <View style = {styles.root}>
       <View style = {styles.container}>

           <Text style = {{fontSize : 25 , fontWeight : 'bold' , color : 'blue' , alignSelf : 'center' , marginBottom : 20 }}>
               Reset your Password
           </Text>


        {/* <Image source = {Logo} styles ={styles.logo} resizeMode='contain'/> */}
    
       
        <TextInput placeholder='Enter Your Password'
        style = {{color : 'black' , backgroundColor : 'grey' , marginTop :20 }}
        value = {password}
        onChangeText={setpassword}
        secureTextEntry = { true } />

        <TextInput placeholder='Enter again Your Password'
        style = {{color : 'black' , backgroundColor : 'grey' , marginTop :20 , marginBottom : 20}}
        value = {resetpassword}
        onChangeText={setresetpassword}
        secureTextEntry = { true } 
        onEndEditing={(e) => handlevalidpassword(e.nativeEvent.text)}/>
         {data.isvalidpassword ? null :
         <Animatable.View animation="fadeInLeft" duration = {500}>
         <Text style = {styles.error}> Password and repassword should be same </Text>
 
         </Animatable.View>
        
        }

        <Button title = "Confirm" style = {styles.button} 
        onPress = {success}/>

        <TouchableOpacity
        onPress = {() => navigation.navigate('SignIn')}>

        <Text style = {styles.accountText}>
            Back To Sign In
        </Text>

</TouchableOpacity>



       </View>
      
   </View>
  )
}

const styles = StyleSheet.create({
    
    root : {
        alignItems : 'center',
        
        
    },
    container : {

        backgroundColor : 'white',
        width : '100%',
        borderColor : '#e8e8e8',
        borderwidth : 1,
        borderRadius : 5,

        paddingHorizontal : 20,
        marginVertical : 5,
        marginTop : 50

    },

    button : {
        backgroundColor : '#3B71F3',
        padding : 30,
        borderRadius : 5 ,
        


    },

    accountText : {
        color : 'grey',
        alignSelf : 'center',
        marginTop : 20

    }, 

    link : {
        color : '#FDB075'
    }

})


export default ResetPassword;