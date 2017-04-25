import React, { Component } from 'react';
import {
    ListView
} from 'react-native';

import {
    HeaderSection
} from '../../component';
import Row from './row';

const food = [
{ name: require('../images/2.jpg'), category: 'Ưu đãi độc quyền' },
{ name: require('../images/3.jpg'), category: 'Ưu đãi nổi bật' },
{ name: require('../images/4.jpg'), category: 'Ưu đãi nổi bật' },
{ name: require('../images/5.jpg'), category: 'Ưu đãi nổi bật' }
    
];
class FListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            })
        };
        this.convertFoodArrayToMap = this.convertFoodArrayToMap.bind(this);
        this.renderSectionHeader = this.renderSectionHeader.bind(this);
        this.renderRow = this.renderRow.bind(this);
        
    }  
    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(this.convertFoodArrayToMap())
        });
    }

    convertFoodArrayToMap() {
        const foodCategoryMap = {};
        for (const foodItem of food) {
            if (!foodCategoryMap[foodItem.category]) {
                foodCategoryMap[foodItem.category] = [];
            }

            foodCategoryMap[foodItem.category].push(foodItem);
        }
        return foodCategoryMap;
    }


    renderRow(foodItem) {
        return (
          <Row
            Item={foodItem.name}
          />
        );
    }
    renderSectionHeader(sectionData, category) {
        return (
          <HeaderSection
            headerText={category}
          />
        );
    }

    render() {
        return (
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            renderSectionHeader={this.renderSectionHeader}
          />
          
        );
    }
}

export default FListView;



