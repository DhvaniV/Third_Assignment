import React from 'react'
import {View , Text , StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
    const navigation = useNavigation()


    return(
        <View>
            <TouchableOpacity onPress = {() => navigation.navigate('Privacy_Policy')}>
                <Text style = {styles.Text}>
                Privacy Policy of our company
                </Text>

            </TouchableOpacity>

            <TouchableOpacity onPress = {() => navigation.navigate('About_Screen')}>
                <Text style = {styles.Text}>
                About
                </Text>

            </TouchableOpacity>
        
    </View>
    )
}

const styles = StyleSheet.create({

    Text : {
        color : 'black',
        alignSelf : 'center',
        marginTop : 20

    },
})

export default Settings