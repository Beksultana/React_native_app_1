import React, {Fragment} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Router, Scene, Stack} from "react-native-router-flux";

import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';

import MainContainer from "./src/conatainers/MainContainer/MainContainer";
import filmsReducer from './store/reducers/starGetReducer';

const rootReducer = combineReducers({
    filmsReducer: filmsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default class App extends React.Component {
  render() {
      return (
          <Provider store={store}>
              <Router titleStyle={{color: "#fff",}} navigationBarStyle={styles.navBar}>
                  <Scene key="root">
                      <Scene key="films" component={MainContainer} title="STAR GATE" initial/>
                  </Scene>
              </Router>
          </Provider>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    navBar: {
        backgroundColor: '#0063a8',
    }
});
