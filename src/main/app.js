import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import HeaderSection  from '../component';

class MainApp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderSection 
                  headerText="Ưu đãi độc quyền" />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default MainApp;