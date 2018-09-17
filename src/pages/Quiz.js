import { Container, Content, Form, Text, Item, Label, Input, Button, Icon } from 'native-base';
import React from 'react';

export default class Quiz extends React.Component {
    render() {
        const deck = this.props.navigation.getParam('deck')

        return (
            <Container style={{ alignItems: 'center' }}>
                <Content style={{ paddingTop: 20 }}>
                    <TextCard key={deck.id} text={deck.question} onClick={() => this.props.navigation.navigate('ViewDeck', { deck: deck })} />
                </Content>

                <Container style={{ flexDirection: 'row', paddingTop: 20, justifyContent: 'space-between' }}>
                    <Button success onPress={() => this.props.navigation.navigate('CreateDeck')}>
                        <Text>Correct</Text>
                    </Button>
                    <Button error onPress={() => this.props.navigation.navigate('CreateDeck')}>
                        <Text>Incorrect</Text>
                    </Button>
                </Container>

            </Container>
        );
    }
}