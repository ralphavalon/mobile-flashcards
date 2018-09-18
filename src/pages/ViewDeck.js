import { Container, Content, Card, CardItem, Text, Body, Button, Icon } from 'native-base';
import React from 'react';
import HeaderNavigationAware from '../components/HeaderNavigationAware';

export default class ViewDeck extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return (
            <HeaderNavigationAware title="View Deck" navigation={navigation} />
        )
    }

    render() {
        const deck = this.props.navigation.getParam('deck')

        return (
            <Container>
                <Container>
                    <Content padder>
                        <Container style={{ paddingTop: 20 }}>
                            <Card>
                                <CardItem header>
                                    <Text>{deck.title}</Text>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Text>
                                            Cards: {deck.questions.length}
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Container style={{ flexDirection: 'row', paddingTop: 20, justifyContent: 'space-between' }}>
                                <Button success iconLeft onPress={() => this.props.navigation.navigate('Quiz', { 'deck': deck })}>
                                    <Icon name='md-clipboard' />
                                    <Text>Start Quiz</Text>
                                </Button>
                                <Button iconLeft onPress={() => this.props.navigation.navigate('AddQuestion', { 'deck': deck })}>
                                    <Icon name='ios-add-circle' />
                                    <Text>Add Question</Text>
                                </Button>
                            </Container>
                        </Container>
                    </Content>
                </Container>
            </Container>
        );
    }
}