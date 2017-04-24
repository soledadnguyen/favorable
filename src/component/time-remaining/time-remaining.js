import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 13
    }
});

const TimeRemaining = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Thoi gian con lai</Text>
  </View>
); 
export default TimeRemaining;
