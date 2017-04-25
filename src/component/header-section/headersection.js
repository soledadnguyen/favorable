import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import Colors from '../../const';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:15,
        alignItems:'flex-start'
    },
    text: {
        color:Colors.Colors.Gray
    }
});

const HeaderSection = (props) => (

  <View style={styles.container}>
    <Text style={styles.text}>{props.headerText}</Text>
  </View>
);

HeaderSection.propTypes = {
    headerText: React.PropTypes.string.isRequired
};
export default HeaderSection;
