import React from 'react';
import {View, FlatList} from 'react-native';
import ImageView from './component/Image';
import styles from './styles';

class Main extends React.PureComponent {
  componentDidMount() {
    this.props.loadPictures();
  }

  openPictureFull = id => {
    this.props.navigation.navigate('PictureFull', {id});
  };
  render() {
    const {pictures} = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          data={pictures}
          keyExtractor={i => i.thumbUrl}
          renderItem={({item}) => (
            <ImageView picture={item} openPictureFull={this.openPictureFull} />
          )}
        />
      </View>
    );
  }
}

export default Main;
