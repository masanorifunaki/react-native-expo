import React                                                    from 'react';
import { Button, Clipboard, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      text : '',
    };
  }

  pbcopy() {
    const { input } = this.state;
    Clipboard.setString(input);
  }

  async getpb() {
    const text = await Clipboard.getString();
    this.setState({ text });
  }
  render() {
    return (
      <View style={ styles.container }>
        <TextInput
          style={ styles.text_input }
          value={ this.state.input }
          onChangeText={ input => this.setState({ input }) }
        />
        <Button onPress={ () => {this.pbcopy();} } title='Save'/>
        <Text>{ this.state.text }</Text>
        <Button onPress={ () => {this.getpb();} } title='Get'/>
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
  text_input: {
    width            : '100%',
    textAlign        : 'center',
    borderBottomWidth: 1,
    borderColor      : '#ccc'
  }
});
