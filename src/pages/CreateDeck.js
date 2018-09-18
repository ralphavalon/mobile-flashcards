import { Container, Content, Form, Text, Item, Label, Input, Button, Icon } from 'native-base';
import React from 'react';
import * as storage from '../modules/storage/DeckStorage'
import HeaderNavigationAware from '../components/HeaderNavigationAware';
import { NavigationActions } from 'react-navigation'

export default class CreateDeck extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => ({
        header: (
            <HeaderNavigationAware title="Create Deck" navigation={navigation} />
        )
    });

    state = {
        name: ''
    }

    reset = () => {
        this.setState({ "name": '' })
        this.toHome()
    }

    toHome() {
        this.props.navigation.dispatch(NavigationActions.back({ key: 'ListDecks' }))
    }

    render() {
        const { navigation } = this.props
        const { name } = this.state
        return (
            <Container style={{ alignItems: 'center' }}>
                <Content style={{ paddingTop: 20 }}>
                    <Form>
                        <Item stackedLabel>
                            <Label>Name</Label>
                            <Input name="name" onChangeText={(e) => this.setState({ "name": e })} value={name} />
                        </Item>
                    </Form>
                </Content>

                <Container>
                    <Button iconLeft onPress={(e) => {
                        if (!!name && !!name.trim()) {
                            storage.createDeck(name)
                                .then((e) => this.reset())
                                .catch(() => alert('Cannot create deck'))
                        } else {
                            alert('Name must not be empty');
                        }

                    }}>
                        <Icon name='ios-add-circle' />
                        <Text>Create Deck</Text>
                    </Button>
                </Container>

            </Container >
        );
    }
}