const q = require('q');
const inquirer = require('inquirer');
const shell = require('shelljs');
const fs = require('fs');
const replace = require('replace-in-file');
const chalk = require('chalk');
const textError = chalk.red;

const { 
    renameFiles, 
    toCamelCase, 
    hasUpperCase, 
    hasSpace, 
    capitalize, 
    toReadableFormat, 
    lowerCaseFirstLetter 
} = require('./utils');


function requestInfo() {

    shell.echo( '------------------------------------------------------------------------------------' );
    shell.echo( `\r` );
    shell.echo( chalk.bold('Want to add a new component into Bifrost Design System?') );
    shell.echo( `You are at the right place. We will generate a starter for Angular et Twig.` );
    shell.echo( `\r` );
    shell.echo( `${chalk.bold('Important:')} This command will not help you generate a VARIANT of a component (E.g. button-xxx).` );
    shell.echo( `${chalk.bold('Need help?')} Please refer to documentation in ${chalk.blue('CONTRIBUTING.mdx')}` );
    shell.echo( `\r` );
    shell.echo( '------------------------------------------------------------------------------------' );
    shell.echo( `\r` );
    
    return inquirer.prompt({
        type: 'list',
        name: 'type',
        message: 'Choose the kind of element:',
        choices: ['Component', 'Organism', 'Template', 'Pipe'],
    
    }).then(function(response) {
        const type = response.type.toLowerCase();
        
        return inquirer.prompt({
            type: 'input',
            name: 'name',
            message: `Enter the name of the ${type}:`,
            validate: function(value) {
                const _value = value.trim().toLowerCase();

                if (_value === '') {
                    return textError('Name is required. 😉');

                } else if ( hasSpace(_value) || hasUpperCase(value) ) {
                    return textError('Spaces and uppercase are not allowed. Use "-" instead. E.g. "radio-button".');

                } else if (_value === 'component' || _value === 'pipe') {
                    return textError('Names `component` and `pipe` are not allowed fo any kind of element.');

                } else if (fs.existsSync('projects/front-end-library/src/lib/components/' + _value)) {
                    return textError('Component', chalk.bold(_value), 'already exist. 😓 \n Maybe you want to edit component here: "projects/front-end-library/src/lib/components/' + _value + '"');

                } else {
                    return true;
                }
            }

        }).then(function (value) {
            return { 
                name: value.name.trim().toLowerCase(), 
                type
            };
        });
    });
}

function generateFromTemplate(element) {
    var deferred = q.defer();

    const type = element.type;
    const typePlural = type + 's';
    const TypePlural = capitalize(typePlural);

    const name = element.name;
    const nameCamelCase = toCamelCase(name);
    const NameCamelCase = capitalize(nameCamelCase);
    const NameReadable = capitalize(toReadableFormat(nameCamelCase));
    
    // Duplicate templates structure
    const tempPath = `scripts/templates/${name}`;
    const referenceFolder = (type === 'pipe') ? 'pipe' : 'component';
    shell.mkdir(tempPath);
    shell.cp('-R', `scripts/templates/${referenceFolder}/*`, tempPath);

    // Parse content files and rename component name
    replace(
        {
            files: `${tempPath}/**/*`,
            from: [ /component-type/g, /Component-type/g, /component-name/g, /Component-Readable-Name/g, /componentName/g, /ComponentName/g, /Pipe-Readable-Name/g, /pipe-name/g, /pipeName/g, /PipeName/g ],
            to: [ typePlural,          TypePlural,        name,              NameReadable,               nameCamelCase,    NameCamelCase,    NameReadable,          name,         nameCamelCase, NameCamelCase ],
        },
        (error, results) => {
            // console.log('Replacement results:', results);
            if (error) {
                return textError('Error occurred:', error);
            }
            
            // Rename Files
            if (type === 'pipe') {
                renameFiles( tempPath, 'pipe-name', name );
            } else {
                renameFiles( tempPath+'/angular', 'component-name', name );
                renameFiles( tempPath+'/twig', 'component-name', name );
            }

            // Files are now ready to be moved in the lib directory
            const finalPath = `projects/front-end-library/src/lib/${type}s/`;
            shell.mv( tempPath, finalPath );
            
            // TODO: add entry in /public-api
            deferred.resolve({ name, NameReadable, type, finalPath });
        }
    );
    return deferred.promise;
}

function success ({ name, NameReadable, type, finalPath }) {
    shell.echo( `\r` );
    shell.echo( chalk.green('------------------------------------------------------------------------------------') );
    shell.echo( chalk.green.bold('\n👍 Great! \r') );
    shell.echo( chalk.green(`Your new ${type} ${chalk.bold(NameReadable)} is ready to dev.`) );
    shell.echo( `\r` );
    shell.echo( `${chalk.bold('Open Source Code')}:` );
    shell.echo( `${chalk.blue(finalPath + name)}` );
    shell.echo( `\r` );
    shell.echo( `${chalk.bold('Open Storybook')}, if you had previously started it (${chalk.bold('npm run storybook')}):` );
    shell.echo( `${chalk.blue(`http://localhost:9008/?path=/story/${type}s-${name}--default`)}` );
    shell.echo( `\r` );
    shell.echo( chalk.green('------------------------------------------------------------------------------------') );
    shell.echo( `\nIn the same time, Compodoc parses all Angular files to generate API documentation of your new ${type}.` );
    shell.echo( `It could take 1 or 2 minutes and it will refresh yoiur browser with the documentation.` );
    shell.exec( `compodoc -p ./tsconfig.json -e json -d . -t`, code => {
        if (code !== 0) return textError('Error occurred with Compodoc.');
    });
}

// Start
requestInfo()
    .then(generateFromTemplate)
    .then(success)


// function createAngularStructure(element) {
//     const type = element.type;
//     const name = element.name;
//     console.log( chalk.bold(`Angular CLI creates ${type} ${name}.`) );

//     var deferred = q.defer();
//     if ( type === 'pipe') {
//         shell.exec(`ng generate pipe ${type}s/${name} --project front-end-library --skipImport true`, code => {
//             if (code !== 0) return deferred.reject();
//             deferred.resolve(element);
//         });
//     } else {
//         shell.exec(`ng generate component ${type}s/${name} --prefix bf --style scss --viewEncapsulation None --project front-end-library --skipImport true`, code => {
//             if (code !== 0) return deferred.reject();
//             deferred.resolve(element);
//         });
//     }
//     return deferred.promise;
// }