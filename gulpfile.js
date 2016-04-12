'use strict';
const gulp = require('gulp');
const shell = require('gulp-shell');
const option =  process.argv[2];
const solution = option === '-r' ? 'recursive' : 'iterative';
var commands = [];

for (var index = 0; index < 10; index++) {
  commands[index] = `node spt-${solution}.js ./input-files/spt-test-in.${index}.txt`;
}

gulp.task('default', shell.task(commands));
