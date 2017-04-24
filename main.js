import React, {Component}  from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import MainView from './src/main';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';
// import { Provider } from 'react-redux';
// import { MainReducer } from './src/reducers';
class MainApp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
          <MainView />
        );
    }
}

/*const MainAppRedux = (props) => {
    const store = createStore(combineReducers({main: MainReducer}),{},applyMiddleware(ReduxThunk))
    return (
        <Provider store={store}>
           <MainApp {...props} dispatch={store.dispatch} /> 
        </Provider>
    )
}*/

export default MainApp;

