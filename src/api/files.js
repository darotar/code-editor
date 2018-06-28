const postParams = (body) => ({
  method: 'POST',
  headers: new Headers({ "Content-Type": "application/json" }),
  body: JSON.stringify(body)
});

export default {
  getDirname: async () => {
    const response = await fetch('/api/dirname');
    const dirname = await response.json();
    
    return dirname;
  },

  getFiles: async () => {
    const response = await fetch('/api/files');
    const files = await response.json();

    return files;
  },

  getFileContent: async (file) => {
    const response = await fetch('/api/files/content', postParams({ file }));
    const content = await response.json();

    return content;
  },

  saveFileContent: async (file, data) => {
    return await fetch('/api/files/save', postParams({ file, data }));
  }
}