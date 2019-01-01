import React                           from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  render() {
    return (
      <View style={ styles.container }>
        <TextInput
          style={ styles.text_input }
          onChangeText={ (text) => this.setState({ text }) }
          value={ this.state.text }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_input: {
    width            : '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});
