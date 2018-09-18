import { Container, Content, Form, Text, Button, Icon } from 'native-base';
import React from 'react';
import * as storage from '../modules/storage/DeckStorage'
import FormField from '../components/FormField';
import HeaderNavigationAware from '../components/HeaderNavigationAware';

export default class AddQuestion extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => ({
        header: (
            <HeaderNavigationAware title="Add Question" navigation={navigation} />
        )
    });

    state = {
        question: '',
        answer: ''
    }

    toDeck(deck) {
        this.props.navigation.navigate('ViewDeck', { deck: deck })
    }

    render() {
        const { question, answer } = this.state
        const deck = this.props.navigation.getParam('deck')

        return (
            <Container style={{ alignItems: 'center' }}>
                <Content style={{ paddingTop: 20 }}>
                    <Form>
                        <FormField label="Question" inputName="question" value={question} onChange={(e) => this.setState({ "question": e })} />
                        <FormField label="Answer" inputName="answer" value={answer} onChange={(e) => this.setState({ "answer": e })} />
                    </Form>
                </Content>

                <Container>
                    <Button iconLeft onPress={(e) => {
                        if (!!question && !!question.trim() && !!answer && !!answer.trim()) {
                            storage.addQuestionToDeck({
                                "question": question,
                                "answer": answer
                            }, deck)
                                .then(() => this.toDeck(deck))
                                .catch(() => Alert.alert('Internal error', 'Cannot create deck'))
                        } else {
                            Alert.alert('Validation error', 'Name must not be empty');
                        }

                    }}>
                        <Icon name='ios-add-circle' />
                        <Text>Add Question</Text>
                    </Button>
                </Container>

            </Container>
        );
    }
}