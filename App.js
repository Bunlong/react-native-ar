import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Button,
  CameraRoll,
  Alert
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
      CameraRoll.saveToCameraRoll(image.path)
        .then(Alert.alert('Success', 'Photo added to camera roll!'))
        .catch(err => console.log('err:', err));
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this._take(true)}
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
