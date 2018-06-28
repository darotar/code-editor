import files from '../api/files';

export const types = {
  DIRNAME: 'DIRNAME',
  FILES: 'FILES',
  FILECONTENT: 'FILECONTENT'
};

export const dirname = () => {
  return async (dispatch) => {
    const result = await files.getDirname();

    return dispatch({ type: types.DIRNAME, dirname: result.dirname });
  }
};

export const getFiles = () => {
  return async (dispatch) => {
    const result = await files.getFiles();

    return dispatch({ type: types.FILES, files: result.files });
  }
}

export const getFileContent = (file) => {
  return async (dispatch) => {
    const result = await files.getFileContent(file);
    
    return dispatch({ type: types.FILECONTENT, content: result.content, file });
  }
}
