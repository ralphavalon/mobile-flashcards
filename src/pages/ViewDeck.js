import { Container, Header, Content, Title, Left, Right, Card, CardItem, Text, Body, Button, Icon } from 'native-base';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import React from 'react';

export default class ViewDeck extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return (
            <Header style={{ marginTop: getStatusBarHeight() }}>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>Flashcards</Title>
                </Body>
                <Right />
            </Header>
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
                                    <Text>{deck.name}</Text>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Text>
                                            Cards: {deck.cards.length}
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Container style={{ flexDirection: 'row', paddingTop: 20, justifyContent: 'space-between' }}>
                                <Button success iconLeft onPress={() => this.props.navigation.navigate('CreateDeck')}>
                                    <Icon name='md-clipboard' />
                                    <Text>Start Quiz</Text>
                                </Button>
                                <Button iconLeft onPress={() => this.props.navigation.navigate('CreateDeck')}>
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