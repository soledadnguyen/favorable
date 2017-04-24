import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    photo: {
        flex: 1,
    }
});
const Row = (props) => (
  <View style={styles.container}>
    <Image source={{ uri: props.picture.large}} style={styles.photo} />
  </View>
);
export default Row;
