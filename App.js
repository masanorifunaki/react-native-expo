import React                                                       from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={ () => console.warn('pressed!') }>
          <Image style={ styles.image } source={ require('./assets/sample.png') }/>
        </TouchableOpacity>
        <Text>Open up App.js to start working on your app!</Text>
        <Button onPress={ () => console.warn('pressed!') } title={ 'Press' }/>
      </View>
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
  image    : {
    width : 64,
    height: 64
  }
});
