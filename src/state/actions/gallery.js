import Const from './const';
import * as API from '../../data/api';
import {mapPictures} from '../mappers/gallery';

export const loadPictures = () => (dispatch, getState) => {
  API.fetchPictures()
    .then(resp => {
      console.log(resp);
      dispatch({
        type: Const.gallery.save,
        payload: mapPictures(resp),
      });
    })
    .catch(e => console.log(e));
};
