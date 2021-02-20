import React from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text, Image } from 'react-native';

export const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <TouchableOpacity
                    style={[styles.button, { marginBottom: 44 }]}
                    onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Dashboard' }],
                        });
                    }
                    }
                >
                    <Image
                        style={{ width: 200, resizeMode: 'contain' }}
                        source={require('../../assets/googleBtn.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]}>
                    <Text style={[styles.buttonText]}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]}>
                    <Text style={[styles.buttonText]}>Create Account </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        marginTop: 44
    },
    buttonText: {
        fontSize: 22,
        textAlign: 'center',
        borderColor: 'black',
        borderWidth: 1,
        padding: 5
    }

});