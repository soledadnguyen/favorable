import React ,{Component} from 'react';

import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {
    View,
    StyleSheet
} from 'react-native';
import {
        HeaderSection,
        TimeRemaining 
}  from '../component';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default class MainView extends Component {
    constructor(props) {
        super(props);
    } 
    render() {
        return (
          <View style={styles.container}>
              
            <HeaderSection 
              headerText='Ưu đãi đặc biệt' 
              headerEnd='adb'
            />
           

          </View>
        );
    }
}




