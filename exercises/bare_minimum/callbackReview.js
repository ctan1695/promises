/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
var readline = require('readline');
var path = require('path');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      callback(err, data);
    } else {
      var myInterface = readline.createInterface({
        input: fs.createReadStream(filePath)
      });

      var lineNumber = 0;

      myInterface.on('line', (line) => {
        lineNumber++;
        if (lineNumber === 1) {
          callback(err, line);
        }
      });
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, (err, res) => {
    if (err) {
      callback(err, res);
    } else {
      callback(null, res.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
