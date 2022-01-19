// import 'react-native-get-random-values';
import React , {useEffect , useState} from 'react'
import {View , Text , StyleSheet} from 'react-native'
import { WebView } from 'react-native-webview';
const Privacy_Policy = () => {
   
    const GOOGLE = 'https://www.google.com/'

    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 3000)
    }, [])
    return(
        <>

            <WebView
                source = {{uri : GOOGLE}}
                // androidHardwareAccelerationDisabled={true}
                />
        
        </>
        
    )
}

const styles = StyleSheet.create({

    
    container : {
        flex : 1,
        marginTop : 20,
        justifyContent : 'center',
        alignItems : 'center',
        //backgroundColor : '#222' 
    },
    Text : {
        color : 'black',
        alignSelf : 'center',
        marginTop : 20

    },
})

export default Privacy_Policy