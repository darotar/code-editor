const bodyParser = require('body-parser');
const controller = require('../controllers');

module.exports = (app) => {
  app.use(bodyParser.json());

  app.get('/api/dirname', (req, res) => {

    res.send(controller.getDirname());
  });

  app.get('/api/files', (req, res) => {
    res.send(controller.getFiles());
  })

  app.post('/api/files/content', (req, res) => {
    res.send(controller.getFileContent(req.body.file));
  })

  app.post('/api/files/save', (req, res) => {
    res.send(controller.saveFileContent(req.body.file, req.body.data));
  })
}