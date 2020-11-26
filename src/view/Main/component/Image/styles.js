import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 186,
    height: 180,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  container: {
    borderWidth: 0.4,
    borderRadius: 15,
    marginVertical: 15,
    marginHorizontal: 5,
    flex: 1,
    backgroundColor: 'white',
  },
  textContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  titleText: {
    fontSize: 14,
    lineHeight: 17,
    color: '#3D3D3D',
  },
  nameText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
    color: '#3D3D3D',
  },
});

export default styles;
