import React , {useState , useContext} from 'react';
import { 
  SafeAreaView
, StyleSheet ,View , Text , Image , TextInput , Button , TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable'
// import { useContext } from 'react/cjs/react.production.min';
import { useNavigation } from '@react-navigation/native'


import { AuthContext } from '../Components/context';

const SignIn = () => {
    const [name , setname] = useState('')
    const [password , setpassword] = useState('')
    const [isSignInSuccess, setisSignInSuccess] = useState(false) 

    const [data , setData] = React.useState({
        isvaliduser : true,
        isvalidpassword : true,
    })

    const {signIn} = useContext(AuthContext);

    const navigation = useNavigation()

    const onSignInPressed = () => {
        
        if(name!='' && password!=''){
            if(name=='dhvani'&&password=='123'){
                setisSignInSuccess(true)
                setTimeout(() => {
                    setisSignInSuccess(false)
                    signIn()
                }, 500)
            }
        }  
        
    }
    const handlevaliduser = (val) => {
        if(val === 'dhvani'){
            setData({
                ...data,
                isvaliduser : true
            })
        }else {
            setData({
                ...data,
                isvaliduser : false
            })
        }
    }

    const handlevalidpassword = (val) => {
        if(val == 123){
            setData({
                ...data,
                isvalidpassword : true
            })
        }else {
            setData({
                ...data,
                isvalidpassword : false
            })
        }
    }

  return (
   <View style = {styles.root}>
       <View style = {styles.container}>


        <Image source = {require('../Images/logo_1.png')} styles ={styles.logo} resizeMode='contain'/>
    
       <TextInput placeholder='Enter Your Name'
        style = {{color : 'black' , backgroundColor : 'grey' ,  marginTop :20}}
        value = {name}
        onChangeText={setname} 
        onEndEditing={(e) => handlevaliduser(e.nativeEvent.text)}/>
        {data.isvaliduser ? null :
         <Animatable.View animation="fadeInLeft" duration = {500}>
         <Text style = {styles.error}>!Please Enter correct Username </Text>
 
         </Animatable.View>
        
        }
       
        <TextInput placeholder='Enter Your Password'
        style = {{color : 'black' , backgroundColor : 'grey' , marginTop :20 , marginBottom : 20}}
        value = {password}
        onChangeText={setpassword}
        keyboardType='numeric'
        maxLength={8}
        secureTextEntry = { true }
        onEndEditing={(e) => handlevalidpassword(e.nativeEvent.text)} />

        {data.isvalidpassword ? null :
         <Animatable.View animation="fadeInLeft" duration = {500}>
         <Text style = {styles.error}>!Please Enter correct Password </Text>
 
         </Animatable.View>
        
        }
        <Button title = "Sign-In" style = {styles.button} onPress = {onSignInPressed}/>

        <TouchableOpacity>

        <Text 
        onPress = {() => navigation.navigate('ResetPassword')}
        style = {styles.passwordText}>
            Forgot Password?
        </Text>

        </TouchableOpacity>

        
        <TouchableOpacity onPress = {() => navigation.navigate('SignUp')}>

            <Text style = {styles.accountText}>
                Don't have an account? Create New
            </Text>

        </TouchableOpacity>





       </View>
      
   </View>
  )
}

const styles = StyleSheet.create({
    logo : {
        width : 100,
        height : 100,
    },
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
        marginTop : 150

    },

    button : {
        backgroundColor : '#3B71F3',
        padding : 30,
        borderRadius : 5 ,
        


    },

    passwordText : {
        color : '#f6d84e',
        alignSelf : 'center',
        marginTop : 20

    },

    accountText : {
        color : 'grey',
        alignSelf : 'center',
        marginTop : 20

    },
    error : {
        color : 'red',
        fontSize : 10
    }

})


export default SignIn;


