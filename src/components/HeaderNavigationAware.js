import { Header, Title, Left, Right, Body, Button, Icon } from 'native-base';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import React from 'react';

export default class HeaderNavigationAware extends React.Component {
    render() {
        const { title, navigation } = this.props
        return (
            <Header style={{ marginTop: getStatusBarHeight() }}>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>{title}</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}