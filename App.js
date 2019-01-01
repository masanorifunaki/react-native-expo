import React                               from 'react';
import { DatePickerIOS, StyleSheet, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }
  render() {
    return (
      <View style={ styles.container }>
        <DatePickerIOS
          style={ styles.data_picker }
          date={ this.state.date }
          onDateChange={ date => this.setState({ date }) }
          mode={ 'date' }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container  : {
    flex           : 1,
    justifyContent : 'center',
    alignItems     : 'center',
    backgroundColor: '#F5FCFF',
  },
  data_picker: {
    width: 320
  }
});
