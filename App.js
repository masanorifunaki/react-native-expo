import React                                                                      from 'react';
import { ActivityIndicator, Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      threads  : []
    };
  }

  componentDidMount() {
    fetch('https://www.reddit.com/r/newsokur/hot.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let threads = responseJson.data.children;
        threads     = threads.map(i => {
          i.key = i.data.url;
          return i;
        });
        this.setState({ threads: threads, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { threads, isLoading } = this.state;

    return (
      <View style={ styles.container }>
        { isLoading ?
          <ActivityIndicator/> :
          <FlatList
            data={ threads }
            renderItem={ ({ item }) => {
              return (
                <View style={ styles.view }>
                  <Image
                    style={ styles.image }
                    source={ { uri: item.data.thumbnail } }
                  />
                  <View style={ styles.text_container }>
                    <View style={ styles.text_column }>
                      <Text>{ item.data.title }</Text>
                      <Text style={ styles.text_font }>{ item.data.domain }</Text>
                    </View>
                  </View>
                </View>
              );
            } }
          />
        }
      </View>
    );
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container     : {
    flex           : 1,
    justifyContent : 'center',
    alignItems     : 'center',
  },
  view          : {
    flex         : 1,
    flexDirection: 'row',
    width        : '100%'
  },
  image         : {
    width : 50,
    height: 50
  },
  text_container: {
    width: width - 50
  },
  text_column   : {
    flex         : 1,
    flexDirection: 'column'
  },
  text_font     : {
    color   : '#ababab',
    fontSize: 10
  }
});
