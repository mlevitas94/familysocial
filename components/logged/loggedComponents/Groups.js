import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export const Groups = () => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={{ textAlign: 'center', marginTop: 44, marginBottom: 44 }}>You are not in any groups.</Text>
            <TouchableOpacity style={{ width: 120 }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                    <FontAwesomeIcon icon={faPlusCircle} style={{ marginRight: 5 }} />
                    <Text>Create Group</Text>
                </View>
            </TouchableOpacity>


        </View>
    );
}
const styles = StyleSheet.create({

})
