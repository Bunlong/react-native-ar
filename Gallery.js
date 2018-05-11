import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  CameraRoll,
  ScrollView,
  Text,
  Image
} from 'react-native';

const App = ({photos}) => (
  <ScrollView>
    {photos.map((p, i) => {
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
);

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = { photos: null };
  }

  componentDidMount() {
    this._fetchPhotos();
  }

  _fetchPhotos = () => {
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
       <App photos={this.state.photos} />
      </View>
    );
  }
}
