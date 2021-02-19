import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text, Image } from 'react-native';

export const Login = () => {
    return (
        <SafeAreaView>
            <TouchableOpacity style={[styles.button]}>
                <Image source={require('../../assets/googleBtn.png')}/>
                <Text style={[styles.buttonText]}>Sign in With Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button]}>
                <Text style={[styles.buttonText]}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button]}>
                <Text style={[styles.buttonText]}>Create Account </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
button : {
    backgroundColor:'red',
},
buttonText: {
    fontSize:22,
    textAlign: 'center'
}

});