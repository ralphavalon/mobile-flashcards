import { Container, Header, Content, Title, Left, Right, Body, Form, Text, Item, Label, Input, Button, Icon } from 'native-base';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import React from 'react';

export default class CreateDeck extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => ({
        header: (
            <Header style={{ marginTop: getStatusBarHeight() }}>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>Create Deck</Title>
                </Body>
                <Right />
            </Header>
        )
    });

    render() {
        return (
            <Container style={{ alignItems: 'center' }}>
                <Content style={{ paddingTop: 20 }}>
                    <Form>
                        <Item stackedLabel>
                            <Label>Name</Label>
                            <Input />
                        </Item>
                    </Form>
                </Content>

                <Container>
                    <Button iconLeft onPress={() => this.props.navigation.navigate('CreateDeck')}>
                        <Icon name='ios-add-circle' />
                        <Text>Create Deck</Text>
                    </Button>
                </Container>

            </Container>
        );
    }
}