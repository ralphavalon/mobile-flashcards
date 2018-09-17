import { Container, Content, Text, Button } from 'native-base';
import React from 'react';
import TextCard from '../components/TextCard';

export default class Result extends React.Component {
    render() {
        const deck = this.props.navigation.getParam('deck')
        const quiz = this.props.navigation.getParam('quiz')

        const successPercentage = quiz.rightAnswers / deck.questions.length
        const text = `You answered right ${successPercentage}% of the questions`

        return (
            <Container style={{ alignItems: 'center' }}>
                <Content style={{ paddingTop: 20 }}>
                    <TextCard key={text} text={text} onClick={() => this.props.navigation.navigate('ViewDeck', { deck: deck })} />
                </Content>

                <Container style={{ flexDirection: 'row', paddingTop: 20, justifyContent: 'space-between' }}>
                    <Button success onPress={() => this.props.navigation.navigate('CreateDeck')}>
                        <Text>Try again</Text>
                    </Button>
                    <Button error onPress={() => this.props.navigation.navigate('CreateDeck')}>
                        <Text>Back to Decks</Text>
                    </Button>
                </Container>

            </Container>
        );
    }
}