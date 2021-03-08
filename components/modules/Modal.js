import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Modal, Pressable, SafeAreaView } from 'react-native';

export const SelectedModal = (props) => {
    return (
        <Modal
            animationType="slide"
            visible={true}
        >
            <SafeAreaView>
                <Pressable onPress={() => props.setSelectedModal('')}>
                    <FontAwesomeIcon icon={faTimes} />
                </Pressable>
                {props.children}
            </SafeAreaView>
        </Modal>
    )
}