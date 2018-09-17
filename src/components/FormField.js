import { Item, Label, Input } from 'native-base';
import React from 'react';

export default class FormField extends React.Component {
    render() {
        const { label, inputName } = this.props
        return (
            <Item stackedLabel>
                <Label>{label}</Label>
                <Input name={inputName} />
            </Item>
        );
    }
}