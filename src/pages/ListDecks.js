import { Container, Content, Card, CardItem, Text, Button, Icon } from 'native-base';
import React from 'react';
import * as storage from '../modules/storage/DeckStorage'

export default class ListDecks extends React.Component {
    state = {
        decks: []
    }
    componentDidMount() {
        storage.getAllDecks().then((decks) => {
            this.setState({ decks })
        })
    }

    render() {
        const { decks } = this.state
        return (
            <Container>
                <Container>
                    <Content padder>
                        <Button iconLeft onPress={() => this.props.navigation.navigate('CreateDeck')}>
                            <Icon name='ios-add-circle' />
                            <Text>Create Deck</Text>
                        </Button>
                        <Container style={{ paddingTop: 20 }}>
                            {decks.map(deck => (
                                <Card key={deck.id}>
                                    <CardItem header button onPress={() => this.props.navigation.navigate('ViewDeck', { deck: deck })}>
                                        <Text>{deck.title}</Text>
                                    </CardItem>
                                </Card>
                            ))}
                        </Container>
                    </Content>
                </Container>
            </Container>
        );
    }
}