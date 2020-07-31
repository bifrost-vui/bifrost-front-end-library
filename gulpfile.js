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

function defaultTask(cb) {
  // place code for your default task here

  var options = {
    continueOnError: false, // default = false, true means don't emit error event
    pipeStdout: false, // default = false, true means stdout is written to file.contents
  };
  var reportOptions = {
  	err: true, // default = true, false means don't write err
  	stderr: true, // default = true, false means don't write stderr
  	stdout: true // default = true, false means don't write stdout
  };

  let type = '';

  return gulp.src('*.js')
    .pipe(prompt.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'Choose the kind of element.',
            choices: ['Component', 'Organisms', 'Template', 'Pipe'],
            validate: function(value) {
                type = value.toLowerCase();
                return value !== '';
            }
	    },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the element.',
            validate: function(value) {
                // console.log('type:', type);
                if (value.trim() === '') {
                    return textError('Name is required. 😉');
                } else if (fs.existsSync('projects/front-end-library/src/lib/components/' + value)) {
                    return textError('Component', chalk.bold(value), 'already exist. 😓 \n Maybe you want to edit component here: "projects/front-end-library/src/lib/components/' + value + '"');
                } else {
                    console.log('not exist');
                    return true;
                }
            }
        }
        ], function(res){
            console.log('result', res);
        })
    )
    // .pipe(
    //     exec(file => `npx browserslist`, options)
    // )
    // .pipe(exec.reporter(reportOptions));
//   cb();
}

exports.default = generateTask;

/* 
npm run generate
Check if we are on root?
ask type (component, ...)
ask name.
Check if name already exist.
ng generate component <type>/<name> --project front-end-library --skipImport true ++
cd <name>
mkdir angular
mkdir twig
cp all files into /angular
create empty twig file in /twig
add entry in /public-api
create a doc.stories.mdx

Warn if people use ng generate... => 'Please use npm run generate'
 */