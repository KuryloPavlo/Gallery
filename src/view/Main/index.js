import Main from './Main';
import {connect} from 'react-redux';
import {loadPictures} from '../../state/actions/gallery';

const mapStateToProps = state => {
  console.log(state.gallery);
  return {
    pictures: state.gallery.pictures,
  };
};

const mapDispatchToProps = dispatch => ({
  loadPictures: () => dispatch(loadPictures()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
