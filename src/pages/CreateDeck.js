import { Container, Header, Content, Title, Left, Right, Body, Text, Button, Icon } from 'native-base';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import React from 'react';

export default class ListDecks extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{ marginTop: getStatusBarHeight() }}>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>EditScreenOne</Title>
                </Body>
                <Right />
            </Header>
        )
    });

    render() {
        return (
            <Container style={{ flex: 1, alignItems: 'center' }}>
                <Content style={{ paddingTop: 20 }}>
                    <Button iconLeft onPress={() => this.props.navigation.navigate('CreateDeck')}>
                        <Icon name='ios-add-circle' />
                        <Text>Save Deck</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}