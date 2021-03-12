import { faCheckCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import variables from '../../../../styleLists/variables'
import { GroupsModals } from './GroupsModals';
import { createStackNavigator } from '@react-navigation/stack';
import { Chat } from './Chat/Chat';
const Stack = createStackNavigator()

export const Groups = (props) => {
    const { accountInfo } = props
    const [modalSelected, setSelectedModal] = useState('')
    const [messages, setMessages] = useState(null)
    const [newGroupInfo, setNewGroupInfo] = useState({
        image: null,
        name: ''
    })

    return (
        <Stack.Navigator
            headerMode='screen'>
            <Stack.Screen
                name='Groups'
                options={{ title: 'Groups' }}>

                {
                    () => (
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
                                                    <Pressable
                                                        key={i}
                                                        style={{ height: 100, width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#c1c1c1', marginBottom: 22, marginTop: 22, borderRadius: 100 }}
                                                        onPress={() => {
                                                            setMessages(group.messages)
                                                            props.navigation.push('Chat')
                                                        }}>
                                                        <View style={{ width: 50, height: 50, backgroundColor: 'red', borderRadius: '50%', marginLeft: 11 }}>

                                                        </View>
                                                        <View>
                                                            <Text style={{}}>Mark: This is the...</Text>
                                                            <Text style={{ position: 'absolute', top: 22, textAlign: 'center', left: 0, right: 0, color: '#444444' }}>Jul 1</Text>
                                                        </View>
                                                        <View style={{ marginRight: 11 }}>
                                                            <FontAwesomeIcon icon={faCheckCircle} />
                                                        </View>
                                                    </Pressable>
                                                )
                                            })
                                        }

                                    </>
                            }
                            <TouchableOpacity style={{ width: 120 }} onPress={() => setSelectedModal('create')}>
                                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                                    <FontAwesomeIcon icon={faPlusCircle} style={{ marginRight: 5, color: variables.buttonColor1 }} />
                                    <Text style={{ color: variables.buttonColor1 }}>Create Group</Text>
                                </View>
                            </TouchableOpacity>

                            <GroupsModals
                                modalSelected={modalSelected}
                                setSelectedModal={setSelectedModal}
                                newGroupInfo={newGroupInfo}
                                setNewGroupInfo={setNewGroupInfo}
                            />

                        </View >
                    )
                }
            </Stack.Screen>
            <Stack.Screen
                name='Chat'
                options={{ title: 'Chat' }}>
                {
                    () => (
                        <Chat messages={messages} setMessages={setMessages} />
                    )
                }
            </Stack.Screen>
        </Stack.Navigator>

    );
}

