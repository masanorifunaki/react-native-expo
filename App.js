import React                   from 'react';
import { StyleSheet, WebView } from 'react-native';

export default class App extends React.Component {
  // コンポーネントを表示するためにも、scalesPageToFit={true} が必要
  render() {
    return (
      <WebView
        source={ { uri: 'https://www.google.com/' } }
        style={ styles.container }
        scalesPageToFit={ true }
      />
    );
  }
}

const styles = StyleSheet.create({
  container : {
    marginTop: 20
  },
});
