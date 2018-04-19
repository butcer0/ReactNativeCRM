/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Login from './Login';
import Loader from './Loader';
import PeopleList from './PeopleList';
// Erik - 4/19/2018 If had multiple reducers would simply call:
  // import reducers from '../reducers';
import reducers from '../reducers/PeopleReducer';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

// Erik - 4/19/2018 from github.com/jhen0409/react-native-debugger copied in from Redux DevTools Integration
  // Connects the application to the React-Native-Debugger Tool
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

type Props = {};
export default class App extends Component<Props> {
  state = { loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBRdUEflJhz3ovznbjFH6q6QDnZ635byo4",
      authDomain: "crmlinkedin2-3d5f5.firebaseapp.com",
      databaseURL: "https://crmlinkedin2-3d5f5.firebaseio.com",
      storageBucket: "crmlinkedin2-3d5f5.appspot.com",
      messagingSenderId: "316953383997"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderInitialView() {
    switch (this.state.loggedIn) {
      case true:
        return <PeopleList />;
      case false:
        return <Login />;
      default:
        return <Loader size="large" />;
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {this.renderInitialView()}
        </View>
      </Provider>
      
    );
  }
}

