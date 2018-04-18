/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import Login from './src/Login';
import Loader from './src/Loader';
import PeopleList from './src/PeopleList';

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
        console.log('user: '+user);
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
      <View style={styles.container}>
        {this.renderInitialView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
