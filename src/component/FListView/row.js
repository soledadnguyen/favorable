import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';

import {TimeRemaining}  from '../../component';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'flex-start' 
    },
    photo: {
        width:380,
        height:100,
        marginLeft:15
        
    }
});
const Row = (props) => {
   
   const link = props.Item;
   return(
     <View style={styles.container}>
       <Image style={styles.photo} source={link} />
       <TimeRemaining 
         timeRemain='Còn 5 ngày 6 giờ 23 phút 48 giây'
       />
     </View>
   );
  
};
Row.propTypes = {
    Item: React.PropTypes.number.isRequired
};

export default Row;
