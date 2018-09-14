import { Container, Header, Content, Title, Card, CardItem, Text } from 'native-base';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import React from 'react';
import Expo from "expo";

export default class App extends React.Component {
    state = {
        "loading": true
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
        });
        this.setState({ loading: false });
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }
        return (
            <Container>
                <Header style={{ paddingTop: getStatusBarHeight() }}>
                    <Title>Flashcards</Title>
                </Header>

                <Content>
                    <Card>
                        <CardItem header button onPress={() => console.log("abc")}>
                            <Text>Test</Text>
                        </CardItem>

                        <CardItem>
                            <Text>
                                Testing
                            </Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}