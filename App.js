import React , {useEffect , useState , useMemo} from 'react';
import { 
  SafeAreaView , View
, StyleSheet , Text , ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator()

import SignIn from './Screens/SignIn.js';
import SignUp from './Screens/SignUp.js';
import ResetPassword from './Screens/ResetPassword.js';
import Home from './Screens/Home.js';
import Settings from './Screens/Settings.js';
import Profile from './Screens/Profile.js';
import Edit_Profile from './Screens/Edit_Profile';
import Privacy_Policy from './Screens/Privacy_Policy.js';
import About from './Screens/About_Screen.js'
import Product from './Screens/Products.js';
import Cart_Screen from './Screens/Cart_Screen.js';
import Order_Screen from './Screens/Order_Screen'



import { AuthContext } from './Components/context.js'



function TabScreens(){
  return(
    
    <Tab.Navigator
    screenOptions={{headerShown:false}}
    
    >
      <Tab.Screen  name="HomeScreen" component={Home} 
      options = {{tabBarLabel : 'Home',
        tabBarIcon : ({focused, color , size}) => (
          <Ionicons name = {focused ? 'home' : 'home-outline'} color={color} size = {size}/>
        )
      }}/>
      <Tab.Screen  name="Settingscreen" component={SettingStackNavigator} 
      options = {{tabBarLabel : 'Settings' , 
      tabBarIcon : ({focused, color , size}) => (
        <Ionicons name = {focused ? 'md-settings' : 'md-settings-outline'} color={color} size = {size}/>
      )
    }}
      />
       <Tab.Screen  name="ProfileScreen" component={ProfileStackNavigator} 
      options = {{tabBarLabel : 'Profile' , 
      tabBarIcon : ({focused, color , size}) => (
        <Ionicons name = {focused ? 'person-sharp' : 'person-outline'} color={color} size = {size}/>
      )
      }}/>
     

    </Tab.Navigator>
    
    
  )
}

const ProfileStack = createStackNavigator()
const ProfileStackNavigator = () => (
    <ProfileStack.Navigator screenOptions={{headerShown:true}}>
        <ProfileStack.Screen name='Profile' component={Profile}/>
        <ProfileStack.Screen name='Edit_Profile' component={Edit_Profile}/>
    </ProfileStack.Navigator>
)

const SettingStack = createStackNavigator()
const SettingStackNavigator = () => (
    <SettingStack.Navigator screenOptions={{headerShown:true}}>
        <SettingStack.Screen name='Settings' component={Settings}/>
        <SettingStack.Screen name='Privacy_Policy' component={Privacy_Policy}/>
        <SettingStack.Screen name='About_Screen' component={About}/>
        
    </SettingStack.Navigator>
)



const  App = () => {

const [isLoading , setisLoading] = useState(true);
const [userToken , setuserToken] = useState(null);

const authContext = React.useMemo(() => ({
  signIn: () => {
    setuserToken('fgkj');
    setisLoading(false);
  },
  signOut: () => {
    setuserToken(null);
    setisLoading(false);
  },
  signUp: () => {
    setuserToken('fgkj');
    setisLoading(false);
  },
}))

useEffect(() => {
  setTimeout(() => {
    setisLoading(false);
  } , 1000);
} , [])

if(isLoading) {
  return (
    <View style = {{flex : 1  , justifyContent : 'center' , alinItems : 'center'}}>
      <ActivityIndicator size = 'large'/>
    </View>
  )
}

  return (
    <AuthContext.Provider value = {authContext}>
       <NavigationContainer>
         {userToken == null ? (

          <Stack.Navigator screenOptions={{
            headerTitleAlign:'center',
            headerTintColor:'#fff',
            headerStyle:{
              backgroundColor:'blue'
            }
          }}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            </Stack.Navigator>

         ) : (

          <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name='Home' component={TabScreens}/>
            <Drawer.Screen name='Product' component={Product}/>
            <Drawer.Screen name='Cart' component={Cart_Screen}/>
            <Drawer.Screen name='Order' component={Order_Screen}/>
            </Drawer.Navigator>



         )}
    
      
    </NavigationContainer>

    </AuthContext.Provider>
   
     
  )
}




const styles = StyleSheet.create({
  root: {
    flex : 1,
    backgroundColor : '#F9FbFC'
  }
})

export default App

