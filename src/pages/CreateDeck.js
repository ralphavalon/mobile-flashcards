import { Container, Content, Form, Text, Item, Label, Input, Button, Icon } from 'native-base';
import React from 'react';
import * as storage from '../modules/storage/DeckStorage'
import FormField from '../components/FormField'
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

    toDeck(deck) {
        this.props.navigation.navigate('ViewDeck', { deck: deck })
    }

    render() {
        const { navigation } = this.props
        const { name } = this.state
        return (
            <Container style={{ alignItems: 'center' }}>
                <Content style={{ paddingTop: 20 }}>
                    <Form>
                        <FormField label="Name" inputName="name" value={name} onChange={(e) => this.setState({ "name": e })} />
                    </Form>
                </Content>

                <Container>
                    <Button iconLeft onPress={(e) => {
                        if (!!name && !!name.trim()) {
                            storage.createDeck(name)
                                .then((decks) => this.toDeck(decks[decks.length - 1]))
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