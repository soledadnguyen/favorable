import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    sub:{
        flexDirection:'row'
    }
    
});

const HeaderSection = (props) => (
 
  <View style={styles.container}>
      <View style={styles.sub}>
          <Text>{props.headerText}</Text>
          <Text>dfasd</Text>
      </View>
      <View><Text>{props.headerEnd}</Text></View>
  </View>
);

HeaderSection.propTypes = {
    headerText: React.PropTypes.string.isRequired
};
export default HeaderSection;
