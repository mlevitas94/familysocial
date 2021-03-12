import React from 'react';
import { Text, View } from 'react-native';



export const Chat = ({messages, setMessages}) => {
    const received = (
        <Text>received</Text>
    )

    const sent = (
        <Text>sent</Text>
    )
    return (
        <View>
            {
                messages.map(message => {
                    return(
                        <View>
                            
                        </View>
                    )
                })
            }
        </View>
    );
}
