import { types } from './actions';

const initialState = {
  dirname: '',
  files: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.DIRNAME:
      return { ...state, dirname: action.dirname }
    case types.FILES:
      return { ...state, files: action.files }
    case types.FILECONTENT:
      return { ...state, content: action.content, file: action.file }
    default:
      return state;
  }
};
