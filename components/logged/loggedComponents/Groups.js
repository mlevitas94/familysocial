import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import variables from '../../../styleLists/variables'



export const Groups = () => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={{ textAlign: 'center', marginTop: 44, marginBottom: 44 }}>You are not in any groups.</Text>
            <TouchableOpacity style={{ width: 120 }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                    <FontAwesomeIcon icon={faPlusCircle} style={{ marginRight: 5 , color:variables.buttonColor1}} />
                    <Text style={{color:variables.buttonColor1}}>Create Group</Text>
                </View>
            </TouchableOpacity>


        </View>
    );
}
const styles = StyleSheet.create({

})
