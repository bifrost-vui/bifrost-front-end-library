const inquirer = require('inquirer');
const shell = require('shelljs');
const q = require('q');
const fs = require('fs');
const replace = require('replace-in-file');
const chalk = require('chalk');

const textError = chalk.red;

const toCamelCase = (str) => {
    const strCamelCase = str.toLowerCase().replace(/(?:(^.)|(\s+|-+.))/g, function(match) {
        return match.charAt(match.length-1).toUpperCase();
    });
    return lowerCaseFirstLetter(strCamelCase);
}

const hasUpperCase = (str) => {
    return (/[A-Z]/.test(str));
}

const hasSpace = (str) => {
    return (/\s/.test(str));
}

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const lowerCaseFirstLetter = (str) => {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

function requestConfig() {
    shell.echo(`------------------------------------------ \n${chalk.bold('Add a new component into Bifrost Design System.')} \nIt will generate template for Angular et Twig. \nPlease refer to documentation in ${chalk.blue('CONTRIBUTING.mdx')}. \n------------------------------------------`);
    
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
                    return textError('Spaces and Uppercase are not allowed. Use "-" instead. E.g. "radio-button".');
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
    const type = element.type;
    const name = element.name;
    // const type = 'component';
    // const name = 'accordion';

    templatePath = `scripts/templates/${name}`;

    shell.mkdir(templatePath);
    shell.cp('-R', 'scripts/templates/component/*', templatePath);

    const nameCamelCase = toCamelCase(name);
    const NameCamelCase = capitalize(toCamelCase(name));

    replace(
        {
            files: `${templatePath}/**/*`,
            from: [ /component-name/g, /componentName/g, /ComponentName/g ],
            to: [ name, nameCamelCase, NameCamelCase ],
        },
        (error, results) => {
            if (error) {
                return console.error('Error occurred:', error);
            }
            
            const files = fs.readdirSync(templatePath)
            for (const file of files) {
                fs.rename(
                    templatePath + '/' + file,
                    templatePath + '/' + file.replace('component-name', name),
                    err => {
                        console.log(err)
                    }
                )
            }

            const path = `projects/front-end-library/src/lib/${type}s/${name}`;
            // console.log('Replacement results:', results);
        }
    );
    // fs.readFile(someFile, 'utf8', function (err,data) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     var result = data.replace(/string to be replaced/g, 'replacement');

    //     fs.writeFile(someFile, result, 'utf8', function (err) {
    //         if (err) return console.log(err);
    //     });
    // });

    // shell.mv(`${path}/*.scss`, `${path}/common/`);
    // shell.mv(`${path}/*`, `${path}/angular/`);
    
    // var deferred = q.defer();

    // shell.exec(`
    //     mkdir ${path}/${name}/angular
    //     mv ${path}/${name}/* ${path}/${name}/angular
    //     `, code => {
    //         if (code !== 0) return deferred.reject();
    //         deferred.resolve(element);
    // });
    // return deferred.promise;
}

// Start
// generateFromTemplate()
requestConfig()
    .then(generateFromTemplate)


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