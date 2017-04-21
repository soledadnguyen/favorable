import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

const HeaderSection = (props) => {
    return (
        <View>
            <Text>{this.props.headerText}</Text>
        </View>
    )
}
export default HeaderSection;