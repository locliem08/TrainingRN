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
  View,SafeAreaView
} from 'react-native';
import {AppStack} from './app/Router';

export default class App extends Component<Props> {
  
  render() {
    const viewApp = <AppStack style={styles.nApp}/>;
    return (
    //  <SafeAreaView style={styles.niphonex}>
    <AppStack style={styles.nApp}/>
    //  </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  niphonex: {
    flex:1,
    backgroundColor:'transparent'
  },
  nApp: {
    flex:1
  },
});