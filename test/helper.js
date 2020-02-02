'use strict';

var fs = require('fs');


function readFile(filename) {
  return fs.readFileSync(filename, { encoding: 'UTF-8' });
}

module.exports.readFile = readFile;


var CmmnModdle = require('cmmn-moddle').default;

var caseDescriptor = require('../resources/casemanagement');

function createModdle() {
  return new CmmnModdle({
    case: caseDescriptor
  });
}

module.exports.createModdle = createModdle;