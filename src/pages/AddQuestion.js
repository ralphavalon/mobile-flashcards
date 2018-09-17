import { Container, Content, Form, Text, Button, Icon } from 'native-base';
import React from 'react';
import FormField from '../components/FormField';
import HeaderNavigationAware from '../components/HeaderNavigationAware';

export default class AddQuestion extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => ({
        header: (
            <HeaderNavigationAware title="Add Question" navigation={navigation} />
        )
    });

    render() {
        return (
            <Container style={{ alignItems: 'center' }}>
                <Content style={{ paddingTop: 20 }}>
                    <Form>
                        <FormField label="Question" inputName="question" />
                        <FormField label="Answer" inputName="answer" />
                    </Form>
                </Content>

                <Container>
                    <Button iconLeft onPress={() => this.props.navigation.navigate('ViewDeck', { 'deck': '' })}>
                        <Icon name='ios-add-circle' />
                        <Text>Add Question</Text>
                    </Button>
                </Container>

            </Container>
        );
    }
}