import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

class PictureFull extends React.PureComponent {
  render() {
    const {picture} = this.props;
    console.log(picture);
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: picture.fullUrl}}
          resizeMode="contain"
        />
      </View>
    );
  }
}

export default PictureFull;
