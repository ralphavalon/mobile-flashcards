import { Container, Header, Content, Title, Body, Left, Right, Text, Button, Icon } from 'native-base';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import React from 'react';

export default class ListDecks extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{ marginTop: getStatusBarHeight() }}>
                <Left />
                <Body>
                    <Title>Flashcards</Title>
                </Body>
                <Right />
            </Header>
        )
    });

    render() {
        return (
            <Container style={{ alignItems: 'center' }}>
                <Content style={{ paddingTop: 20 }}>
                    <Button iconLeft onPress={() => this.props.navigation.navigate('CreateDeck')}>
                        <Icon name='ios-add-circle' />
                        <Text>Create Deck</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}