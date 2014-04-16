
var cdw = require('../models/cdw.js')

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
