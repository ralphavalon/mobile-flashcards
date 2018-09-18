import { Container, Content, Text, Button, View } from 'native-base';
import React from 'react';
import TextCard from '../components/TextCard';
import Result from './Result'

export default class Quiz extends React.Component {
    state = {
        showAnswer: false,
        currentQuestionIndex: 0,
        correct: 0,
        incorrect: 0
    }
    render() {
        const deck = this.props.navigation.getParam('deck')
        const totalQuestions = deck.questions.length
        let { correct, incorrect, currentQuestionIndex, showAnswer } = this.state
        let flashcard = {};
        if (currentQuestionIndex < totalQuestions) {
            flashcard = deck.questions[currentQuestionIndex];
        } else {
            const successPercentage = Math.round((correct / totalQuestions) * 100)
            const text = `You answered right ${successPercentage}% of the questions: ${correct}/${totalQuestions}`

            return (
                <Container>
                    <Content style={{ paddingTop: 20 }}>
                        <TextCard key={text} text={text} />
                    </Content>

                    <Container style={{ flexDirection: 'row', paddingTop: 20, justifyContent: 'center' }}>
                        <Button success style={{ marginRight: 20 }} onPress={() => this.props.navigation.navigate('ViewDeck', { deck: deck })}>
                            <Text>Try again</Text>
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Home')}>
                            <Text>Back to Decks</Text>
                        </Button>
                    </Container>
                </Container>
            )
        }

        return (
            <Container>
                <Container style={{ alignItems: 'center' }}>
                    <Text>{currentQuestionIndex + 1}/{totalQuestions}</Text>
                    <Content style={{ paddingTop: 20 }}>
                        <TextCard key={deck.id} header={flashcard.question} text={showAnswer ? flashcard.answer : 'Tap here to see the answer'} onClick={() => this.setState({ showAnswer: true })} />
                    </Content>
                </Container>

                {showAnswer ?
                    <Container style={{ flexDirection: 'row', paddingTop: 20, justifyContent: 'center' }}>
                        <Button success style={{ marginRight: 20 }} onPress={() => this.setState({ showAnswer: false, correct: ++correct, currentQuestionIndex: ++currentQuestionIndex })}>
                            <Text>Correct</Text>
                        </Button>
                        <Button danger onPress={() => this.setState({ showAnswer: false, incorrect: ++incorrect, currentQuestionIndex: ++currentQuestionIndex })}>
                            <Text>Incorrect</Text>
                        </Button>
                    </Container> : <View />}

            </Container>
        );
    }
}