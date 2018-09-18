import { Item, Label, Input } from 'native-base';
import React from 'react';

export default class FormField extends React.Component {
    render() {
        const { label, inputName, value, onChange } = this.props
        return (
            <Item stackedLabel>
                <Label>{label}</Label>
                <Input name={inputName} onChangeText={onChange} value={value} />
            </Item>
        );
    }
}