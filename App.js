import React                                                                 from 'react';
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {
  render() {
    const data = [
      { str: 'hoge', key: '1' },
      { str: 'fuga', key: '2' },
      { str: 'foo', key: '3' },
    ];
    return (
      <View style={styles.container}>
        <FlatList
          style={ styles.list }
          data={ data }
          renderItem={ ({ item }) => {
            return <Text key={ item.key }>1{ item.str }</Text>;
          } }
        />
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
  },
  list     : {
    paddingTop: 50
  }
});
