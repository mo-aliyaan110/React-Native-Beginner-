import { StyleSheet, ImageBackground,View, SafeAreaView, Image, Button, Text } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
  return (

        <ImageBackground source={require('../assets/background.jpg')} style={styles.Imagebackground} >

            
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.headline} >A place to sell your used items!</Text>
            
            <View style={styles.registerButton}>
                <Button title='Sign up' color="white" />
                {/* <Text> Sign Up </Text> */}
            </View>
            <View style={styles.loginButton}>
                <Button title='Login' color="white" />
            </View>
        </ImageBackground> 
  )
}

const styles = StyleSheet.create({
    Imagebackground:{
        // flex: 1,
        width: '100%',
        height: '100%',
        flexDirection:'column',
        justifyContent: 'flex-end',
        alignItems : 'center'
    },
    registerButton : {
        backgroundColor: '#fc5c65',
        width: '100%',
        height: '7%'
    },
    loginButton : {
        backgroundColor: '#4ECDC4',
        width: '100%',
        height: '7%'
    },
    logo : {
        width : 100,
        height : 100,
        position : 'absolute',
        top : 90,
         
    },
    headline : {
        
        position : 'absolute',
        top : 200,
         
    }
});

