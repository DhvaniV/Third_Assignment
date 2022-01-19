import React , {useState} from 'react';
import { 
  SafeAreaView
, StyleSheet ,View , Text , Image , TextInput , Button , TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'



const SignUp = () => {
    const [name , setname] = useState('')
    const [password , setpassword] = useState('')
    const [resetpassword , setresetpassword] = useState('')
    const [email , setemail] = useState('')

    const [data , setData] = React.useState({
        isvaliduser : true,
        isvalidmail : true,
        isvalidpassword : true,
    })

    const [isuser , setuser] = useState(false)
    const [isemail , setisemail] = useState(false)
    const [ispassword , setispass] = useState(false)
    const [isrepass , setisrepass] = useState(false)
    const navigation = useNavigation()

    const handlevaliduser = (val) => {
        if(val == ''){
            setData({
                ...data,
                isvaliduser : false
            })
        }else {
            setData({
                ...data,
                isvaliduser : true
            })
            setuser(true)
        }
    }
    const handlevalidemail = () => {
        const pattern = /\S+@\S+\.\S+/
        if(pattern.test(email)){
            setData({
                ...data,
                isvalidmail : true
            })
            setisemail(true)
        }else {
            setData({
                ...data,
                isvalidmail : false
            })
        }
    }
    const handlevalidpassword = () =>{
        if(password == resetpassword){
            setData({
                ...data,
                isvalidpassword : true
            })
            setispass(true)
            setisrepass(true)
        }
        else{
            setData({
                ...data,
                isvalidpassword : false
            })
        }
    }
    const success = () => {
        if(isuser && isemail && ispassword && isrepass){
            alert ("Registered Successfully")
        }
    }

  return (
   <View style = {styles.root}>
       <View style = {styles.container}>

           <Text style = {{fontSize : 25 , fontWeight : 'bold' , color : 'blue' , alignSelf : 'center' , marginBottom : 20 }}>
               Create Your Account
           </Text>


        {/* <Image source = {Logo} styles ={styles.logo} resizeMode='contain'/> */}
    
       <TextInput placeholder='Enter Your Name'
        style = {{color : 'black' , backgroundColor : 'grey'}}
        value = {name}
        onChangeText={setname}
        onEndEditing={(e) => handlevaliduser(e.nativeEvent.text)} />
         {data.isvaliduser ? null :
         <Animatable.View animation="fadeInLeft" duration = {500}>
         <Text style = {styles.error}>!Please Enter Username </Text>
 
         </Animatable.View>
        
        }

        <TextInput placeholder='Enter Your Email'
        style = {{color : 'black' , backgroundColor : 'grey' , marginTop :20 }}
        value = {email}
        onChangeText={setemail}
        onEndEditing={(e) => handlevalidemail(e.nativeEvent.text)}
        />

        {data.isvalidmail ? null :
         <Animatable.View animation="fadeInLeft" duration = {500}>
         <Text style = {styles.error}>!Please Enter valid email </Text>
 
         </Animatable.View>
        
        }
        

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
        onEndEditing={(e) => handlevalidpassword(e.nativeEvent.text)} />
        {data.isvalidpassword ? null :
         <Animatable.View animation="fadeInLeft" duration = {500}>
         <Text style = {styles.error}> Password and repassword should be same </Text>
 
         </Animatable.View>
        
        }

        <Button title = "Register" style = {styles.button} onPress={success}/>

        <TouchableOpacity>

            <Text style = {styles.accountText}>
            By registering , you confirm that youaccept our{' '} 
            <Text style = {styles.link}> Terms of Use</Text>  and{' '}
            <Text style = {styles.link}>privacy policy</Text>

            </Text>

        </TouchableOpacity>

        <TouchableOpacity 
        onPress = {() => navigation.navigate('SignIn')}>

        <Text style = {styles.accountText}>
            Have an account? SignIn
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
    },
    error : {
        color : 'red',
        fontSize : 10
    }

})


export default SignUp;


