'use strict';

const exec = require('child_process').exec;
const pathToScript = './script.js';

exports.get = function(params) {
  // Return new Promise
  return new Promise((resolve, reject) => {

   exec('node ' + pathToScript, (err, stdout, stderr) => {

        if(err !== null){
            reject(new Error('Nope'));
        }
        else {

            resolve(JSON.parse(stdout));
        }

    });

  });
};