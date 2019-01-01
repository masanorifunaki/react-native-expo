import React                               from 'react';
import { Button, Share, StyleSheet, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      position: {},
    };
  }

  openShare() {
    Share.share({
      title  : 'Title',
      message: 'Message'
    }, {}).then((result, activityType) => {
      if ( result.action === Share.dismissedAction ) {
        // シェアを中断した場合(iOS)
      } else if ( result.action === Share.sharedAction ) {
        // シェアを実行した場合(iOS,Android)
      } else {

      }
    });
  }
  render() {
    const { position } = this.state;

    return (
      <View style={ styles.container }>
        <Button onPress={ () => this.openShare() } title={ 'Open' }/>
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
