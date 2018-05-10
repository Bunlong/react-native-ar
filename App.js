import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Button
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  _pick(cropit, circular = false) {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this._pick(true)}
          title="Pick"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
