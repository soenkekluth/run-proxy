#!/usr/bin/env node

const exec = require('child_process').execSync;
const fs = require('fs');
const commandExists = require('command-exists');
const argv = require('minimist')(process.argv.slice(2));

var command = argv._[0];

var options = Object.keys(argv).map(key => {
  if (key !== '_') {
    return '-' + key + ' ' + argv[key];
  }
});

options.splice(0, 1);
if (options.length) {
  command += ' ' + options.join(' ');
}

const shell = (command) => {
  return new Promise((resolve, reject) => {

    var out = '';
    exec(command, { stdio: 'inherit' }, (error, stdout, stderr) => {
      if (error) {
        resolve(error);
        return;
      }
      // console.log(stdout);
      if (stderr) {
        out = stderr;
        // return;
      }

      out += stdout;

      resolve(out);
    });

  });
}

commandExists('yarn', function(err, exists) {

  let cmd = 'npm run';
  if(exists && fs.existsSync('./yarn.lock')){
    cmd = 'yarn';
  }
  cmd += ' ' + command;
  shell(cmd);
});
