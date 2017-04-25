import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import Colors from '../../const';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems:'center',
        flexDirection:'row',
        margin:10,
        marginLeft:20
    },
    text: {
        fontSize: 13,
        marginLeft:5,
        color: Colors.Colors.DarkGray
    },
    icon: {
        width:20,
        height:20
    }
});

const TimeRemaining = (props) => (
  <View style={styles.container}>
    <Image style={styles.icon} source={require('../images/clock.png')} />
    <Text style={styles.text}>{props.timeRemain}</Text>
  </View>
); 
TimeRemaining.propTypes = {
    timeRemain: React.PropTypes.string.isRequired
};

export default TimeRemaining;
