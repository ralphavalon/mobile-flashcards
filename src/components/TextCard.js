import { Card, Text, CardItem } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native'

export default class TextCard extends React.Component {
    render() {
        const { id, header, text, onClick } = this.props

        return (
            <TouchableOpacity key={id} onPress={onClick}>
                <Card pointerEvents="none" style={{ alignItems: 'center' }} >
                    <CardItem header button onPress={onClick}>
                        <Text>{header}</Text>
                    </CardItem>
                    {text && <CardItem button onPress={onClick}><Text>{text}</Text></CardItem>}
                </Card>
            </TouchableOpacity>
        );
    }
}