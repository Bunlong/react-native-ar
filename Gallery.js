import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Button,
  CameraRoll,
  Alert,
  ScrollView,
  Text,
  Image
} from 'react-native';

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = { photos: null };
  }

  componentDidMount() {
    this._getPhotos();
  }

  _getPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    }).then(r => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {});
  }

  render() {
    if (this.state.photos == null) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <View>
        <ScrollView>
          {this.state.photos.map((p, i) => {
            return (
              <Image
                key={i}
                style={{
                  width: 200,
                  height: 200,
                }}
                source={{ uri: p.node.image.uri }}
              />
            );
          })}
       </ScrollView>
      </View>
    );
  }
}
