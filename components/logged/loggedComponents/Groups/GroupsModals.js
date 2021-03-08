import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'
import { Pressable, Text, View, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { SelectedModal } from '../../../modules/Modal';
import * as ImagePicker from 'expo-image-picker'
import { useEffect } from 'react';

export const GroupsModals = ({ modalSelected, setSelectedModal, selectedImage, setSelectedImage }) => {
    useEffect(() => {
        return () => {
            setSelectedImage(null)
        }
    },[])
    return (
        <View>
            {
                modalSelected === 'create' ?
                    <SelectedModal setSelectedModal={setSelectedModal}>
                        <View>
                            <View>
                                <Text style={{ textAlign: 'center', marginBottom: 44, marginTop: 44 }}>Groups can have a maximum of 12 people.</Text>
                                <Text style={{ textAlign: 'center' }}>Once you create a group, you can invite members via text or group ID</Text>
                            </View>
                            <View style={{ marginTop: 44 }}>
                                <TextInput editable maxLength={40}
                                    style={styles.textInput}
                                    placeholder='Group Name'
                                />
                                <Text style={{ textAlign: 'center', marginTop: 44, marginBottom: 11 }}>Group Image</Text>
                                <Pressable style={{ marginBottom: 44 }} onPress={async () => {
                                    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

                                    if (status === 'denied') {
                                        return setSelectedModal('denied')
                                    }
                                    const result = await ImagePicker.launchImageLibraryAsync({ mediaType: ImagePicker.MediaTypeOptions.Images })
                                    setSelectedImage('not null')
                                }}>
                                    {
                                        selectedImage === null ?
                                            <View style={{ marginRight: 'auto', marginLeft: 'auto', borderColor: 'black', borderWidth: 1, padding: 44 }}>
                                                <FontAwesomeIcon icon={faImage} size={70} />
                                            </View>
                                            :
                                            <Text>Image here</Text>

                                    }
                                </Pressable>
                                <Button title='Create Group' />
                            </View>
                        </View>
                    </SelectedModal>
                    :
                    modalSelected === 'denied' ?
                        <SelectedModal setSelectedModal={setSelectedModal}>
                            <Text style={{ textAlign: 'center', marginTop: 44 }}>To select a photo from your device, please allow photo permissions in your device settings</Text>
                        </SelectedModal>
                        :
                        null
            }
        </View>
    )
}
const styles = StyleSheet.create({
    textInput: { borderColor: 'black', borderWidth: 1, width: '50%', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, marginBottom: 22 }
})