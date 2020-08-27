const q = require('q');
const shell = require('shelljs');
const inquirer = require('inquirer');
      inquirer.registerPrompt('directory', require('inquirer-select-directory'));
const replace = require('replace-in-file');
const chalk = require('chalk');
const textError = chalk.red;

const jsonMigrationPaths = require('./migration-path-map.json');
const { objFilter } = require('../utils');


function migratePath(){
  let deferred = q.defer();

  shell.echo( '------------------------------------------------------------------------------------' );
  shell.echo( '\r' );
  shell.echo( chalk.bold('Migration Path') );
  shell.echo( '\r' );
  shell.echo( 'Migrate Twig files from PatternLab to Bifrost (the new design system).' );
  shell.echo( '\r' );
  shell.echo( chalk.bold('This script will find and replace all legacy paths to Pattern Lab.') );
  shell.echo( '@atoms/03-form/input-autocomplete-example.twig  -->  @components/form/input.twig');
  shell.echo( '\r' );
  shell.echo( chalk.bold('FYI, in the new architecture:') );
  shell.echo( '1. We removed the Atomic organisation.' );
  shell.echo( '2. We simplified components variants.' );
  shell.echo( '3. We use the same components properties for Angular and Drupal.' );
  shell.echo( `For more information, see ${chalk.blue( 'documentation for migration.//TODO: Add a link Storybook')}.` );
  shell.echo( '\r' );

  const jsonMigrationPathConfirmed =  objFilter(jsonMigrationPaths, (fileValue) => typeof fileValue !== "number" );

  const arrOldPath = Object.keys(jsonMigrationPathConfirmed);
  const arrNewPath = Object.values(jsonMigrationPathConfirmed); // ex. ['@components/form/input-autocomplete.twig']

    // Ask for the theme folder
    inquirer.prompt({
        type: 'directory',
        name: 'path',
        message: 'Choose the path of your theme.',
        basePath: '..'
    }).then(function(response) {

        // Parse content files and rename component name
        const themePath = response.path;
        replace(
            {
                files: `${themePath}/**/*`,
                // Note: If something is broken, maybe a deconstruction will fix it: `from: [...arrOldPath], to: [...arrNewPath]`.
                from: arrOldPath,
                to: arrNewPath,
                countMatches: true,
                ignore: '**/scripts/migration/**'
            },
            (error, results) => {
                // console.log('Replacement results:', results);
                if (error) {
                    return textError( 'Error occurred:', error );
                }
                deferred.resolve({results});
            }
        );
    });

  return deferred.promise;
}

function success ({results}) {

  // Get and show updated files
  const changedFiles = results
    .filter(result => result.hasChanged)
    .map(result => result.file);
  
  if (changedFiles.length > 0) {

    shell.echo( '\r' );
    shell.echo( chalk.green.bold('Files updated:') );
    changedFiles.forEach((file, index, array) => {
        shell.echo( chalk.green(`${file}`) );
    });

    shell.echo( chalk.green.bold('\n👍 Great! \r') );
    shell.echo( chalk.green('Your PATH migration from Patternlab to Bifrost is all done!') );
    shell.echo( '\r' );
    shell.echo( `${chalk.bold('But wait! ')} You still have to check if all components API are valid.` );
    shell.echo( 'Please, open Documentation for that (//TODO: Add link to Storybook).' );
    shell.echo( chalk.green('------------------------------------------------------------------------------------') );

  } else {
      shell.echo( chalk.bold('\nDone! \r') );
      shell.echo( 'However, no legacy path were found.' );
      shell.echo( 'Either the migration was already done or you didn\'t choose the right path to your theme.' );
      shell.echo( '\r' );
      shell.echo( '------------------------------------------------------------------------------------' );
  }
}


migratePath()
  .then(success);