import React from 'react';
import { StackNavigator } from 'react-navigation';
import CreateDeck from './src/pages/CreateDeck'
import ListDecks from './src/pages/ListDecks'

const Stack = StackNavigator({
    Home: {
        screen: ListDecks
    },
    CreateDeck: {
        screen: CreateDeck
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