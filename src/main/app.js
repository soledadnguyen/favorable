import React from 'react';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import {
    View,
    StyleSheet
} from 'react-native';
import {
    FListView,
    ItemView
} from '../component';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const MainView = () => (
  <View style={styles.container}>
    <ItemView />
  </View>
);

export default MainView;




