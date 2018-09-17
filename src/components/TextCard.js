import { Card, Text, CardItem } from 'native-base';
import React from 'react';

export default class TextCard extends React.Component {
    render() {
        const { id, text, onClick } = this.props

        return (
            <Card key={id}>
                <CardItem header button onPress={onClick}>
                    <Text>{text}</Text>
                </CardItem>
            </Card>
        );
    }
}