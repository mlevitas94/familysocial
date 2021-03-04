import { faCheck, faCheckCircle, faPlusCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Modal, SafeAreaView, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import variables from '../../../styleLists/variables'



export const Groups = (props) => {
    const { accountInfo } = props

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
            {
                accountInfo.groups.length === 0 ?
                    <>
                        <Text style={{ textAlign: 'center', marginTop: 44, marginBottom: 44 }}>You are not in any groups.</Text>

                    </>

                    :
                    <>
                        {
                            accountInfo.groups.map((group, i) => {
                                return (
                                    <View key={i} style={{ height: '20%', width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#c1c1c1', marginBottom: 22, marginTop: 22, borderRadius: 100 }}>
                                        <View style={{ width: 50, height: 50, backgroundColor: 'red', borderRadius: '50%', marginLeft: 11 }}>

                                        </View>
                                        <View>
                                            <Text style={{}}>Mark: This is the...</Text>
                                            <Text style={{ position: 'absolute', top: 22, textAlign: 'center', left: 0, right: 0, color: '#444444' }}>Jul 1</Text>
                                        </View>
                                        <View style={{ marginRight: 11 }}>
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </View>
                                    </View>
                                )
                            })
                        }

                    </>
            }
            <TouchableOpacity style={{ width: 120 }} onPress={() => setModalVisible(true)}>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                    <FontAwesomeIcon icon={faPlusCircle} style={{ marginRight: 5, color: variables.buttonColor1 }} />
                    <Text style={{ color: variables.buttonColor1 }}>Create Group</Text>
                </View>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                visible={modalVisible}
            >
                <SafeAreaView>
                    <Pressable onPress={() => setModalVisible(false)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </Pressable>
                    <View>
                        <Text style={{ textAlign: 'center', marginBottom: 44, marginTop: 44 }}>Groups can have a maximum of 12 people.</Text>
                        <Text style={{ textAlign: 'center' }}>Once you create a group, you can invite members via text or group ID</Text>
                    </View>
                    <View>
                     
                    </View>
                </SafeAreaView>
            </Modal>
        </View >

    );
}
const styles = StyleSheet.create({

})
