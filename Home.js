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
import {Actions} from 'react-native-router-flux'

export default class Home extends Component {
  constructor() {
    super();
  }

  _take = (cropit) => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: cropit
    }).then(image => {
      CameraRoll.saveToCameraRoll(image.path)
        .then(Alert.alert('Success', 'Photo added to Gallery!'))
        .catch(err => console.log('err:', err));
    });
  }

  _routeToGallery = () => {
    Actions.gallery();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this._take(true)}
          title="Take photo"
          color="#841584"
        />
        <Button
          onPress={() => this._routeToGallery()}
          title="Gallery"
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
