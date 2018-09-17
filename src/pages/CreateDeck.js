import { Container, Content, Form, Text, Item, Label, Input, Button, Icon } from 'native-base';
import React from 'react';
import HeaderNavigationAware from '../components/HeaderNavigationAware';

export default class CreateDeck extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => ({
        header: (
            <HeaderNavigationAware title="Create Deck" navigation={navigation} />
        )
    });

    render() {
        return (
            <Container style={{ alignItems: 'center' }}>
                <Content style={{ paddingTop: 20 }}>
                    <Form>
                        <Item stackedLabel>
                            <Label>Name</Label>
                            <Input name="name" />
                        </Item>
                    </Form>
                </Content>

                <Container>
                    <Button iconLeft onPress={(e) => {
                        e.preventDefault();
                        if (!!name && !!name.trim()) {
                            const deck = serializeForm(e.target, { hash: true });
                            onSubmit(deck);
                            e.target.reset();
                            this.props.navigation.navigate('CreateDeck');
                        } else {
                            alert('Name must not be empty');
                        }

                    }}>
                        <Icon name='ios-add-circle' />
                        <Text>Create Deck</Text>
                    </Button>
                </Container>

            </Container>
        );
    }
}