const gulp = require('gulp');
const prompt = require('gulp-prompt');
const exec = require('gulp-exec');
const chalk = require('chalk');
const fs = require('fs');

const textError = chalk.red;

function generateTask(cb) {
    console.log('hello');
    const gen = 'component';
    helloTask(type);
}

function helloTask(cb, arg) {
    console.log('hello', cb, arg);
}

exports.default = generateTask;
