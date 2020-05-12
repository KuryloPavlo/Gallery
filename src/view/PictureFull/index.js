import PictureFull from './PictureFull';
import {connect} from 'react-redux';

const mapStateToProps = (state, props) => {
  console.log(props);
  return {
    picture: state.gallery.pictures.find(
      item => item.id === props.route.params.id,
    ),
  };
};

export default connect(mapStateToProps)(PictureFull);
