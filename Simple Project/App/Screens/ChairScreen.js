import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'

export default function ChairScreen() {
  return (
    <SafeAreaView>
      <ImageBackground style={styles.chair} source={require('../assets/chair.jpg')} >
        <View style={styles.buttonContainer}>
            <View style={styles.cancel} ></View>
            <View style={styles.ok}></View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    chair : {
        
        width : '100%',
        height  : '96%',
        top : 20,    
    },
    cancel : {
        backgroundColor : '#fc5c65',
        width : 50,
        height : 50,
        left : 10
    },
    ok : {
        backgroundColor : '#4ECDC4',
        width : 50,
        height : 50,
        right : 10
    },
    buttonContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',

    }
})