import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Button
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      image: null
    };
  }

  _take(cropit) {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: cropit
    }).then(image => {
      console.log(image);
      this.state
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this._pick(true)}
          title="Take photo"
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
