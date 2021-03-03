import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import variables from '../../../styleLists/variables'



export const Groups = (props) => {
    const { accountInfo } = props

    return (
        <View style={{alignItems:'center', justifyContent:'flex-start'}}>
            {
                accountInfo.groups.length === 0 ?
                    <>
                        <Text style={{ textAlign: 'center', marginTop: 44, marginBottom: 44 }}>You are not in any groups.</Text>
                        <TouchableOpacity style={{ width: 120 }}>
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                                <FontAwesomeIcon icon={faPlusCircle} style={{ marginRight: 5, color: variables.buttonColor1 }} />
                                <Text style={{ color: variables.buttonColor1 }}>Create Group</Text>
                            </View>
                        </TouchableOpacity>
                    </>

                    :
                    <>
                        {
                            accountInfo.groups.map((group, i) => {
                                return (
                                    <View key={i} style={{ height: '20%', width: '80%', flexDirection:'row', justifyContent:'center', alignItems:'center', backgroundColor:'grey', marginBottom:22, marginTop:22 }}>
                                        <View style={{ width: '20%', height: '50%', backgroundColor: 'red', borderRadius: '50%' }}>

                                        </View>
                                        <View>
                                            <Text>Mark: This is the most recent message</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </>
            }
        </View>

    );
}
const styles = StyleSheet.create({

})
