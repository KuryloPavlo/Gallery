import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

class ImageView extends React.PureComponent {
  render() {
    const {picture, openPictureFull} = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => openPictureFull(picture.id)}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: picture.thumbUrl,
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{picture.username}</Text>
          <Text style={styles.titleText}>{picture.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ImageView;
