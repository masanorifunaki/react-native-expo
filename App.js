import React                                  from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    const { width, height, scale } = Dimensions.get('window');
    return (
      <View style={ styles.container }>
        <Text>{ width }</Text>
        <Text>{ height }</Text>
        <Text>{ scale }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex           : 1,
    justifyContent : 'center',
    alignItems     : 'center',
    backgroundColor: '#F5FCFF',
  },
});
