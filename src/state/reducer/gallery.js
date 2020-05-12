import Const from '../actions/const';

const initialState = {
  pictures: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Const.gallery.save:
      return {
        ...state,
        pictures: action.payload,
      };
    default:
      return state;
  }
};
