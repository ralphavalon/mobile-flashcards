import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Header, Title, Body, Left, Right } from 'native-base';

import CreateDeck from './src/pages/CreateDeck'
import ListDecks from './src/pages/ListDecks'
import ViewDeck from './src/pages/ViewDeck'

const Stack = createStackNavigator({
    Home: ListDecks,
    CreateDeck: CreateDeck,
    ViewDeck: ViewDeck
},
    {
        initialRouteName: 'Home',
        navigationOptions: {
            header: ({ navigation }) => (
                <Header style={{ marginTop: getStatusBarHeight() }}>
                    <Left />
                    <Body>
                        <Title>Flashcards</Title>
                    </Body>
                    <Right />
                </Header>)
        }
    })



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
            <Stack />
        );
    }
}