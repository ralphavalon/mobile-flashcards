import { Container, Content, Text, Button, Icon } from 'native-base';
import React from 'react';
import TextCard from '../components/TextCard';
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
                        <Container style={{ paddingTop: 20 }}>
                            {decks.map(deck => (
                                <TextCard key={deck.id} header={deck.title} text={`${deck.questions.length} question(s)`} onClick={() => this.props.navigation.navigate('ViewDeck', { deck: deck })} />
                            ))}
                        </Container>
                    </Content>
                </Container>
            </Container>
        );
    }
}