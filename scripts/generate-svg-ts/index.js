const q             = require('q');
const inquirer      = require('inquirer');
const shell         = require('shelljs');
const fs            = require('fs');
const replace       = require('replace-in-file');
const open          = require('open');
const chalk         = require('chalk');
const textError     = chalk.red;

const interfaceIcons    = require('../../public/icons/list/interfaces');
const illustrationIcons = require('../../public/icons/list/illustrations');


function requestInfo() {

    shell.echo( '------------------------------------------------------------------------------------' );
    shell.echo( `\r` );
    shell.echo( chalk.bold('You are about to (re)generate file:') );
    shell.echo( `projects/front-end-library/src/lib/components/icon/svg/${chalk.bold('svg.ts')}` );
    shell.echo( `This file export an object with all SVG icons based on the list: /public/icons/list/ ${chalk.bold('illustrations.json')} and ${chalk.bold('interfaces.json')}.` );
    shell.echo( `\r` );

    return inquirer.prompt({
        type: 'confirm',
        name: 'confirmation',
        message: 'Are tou sure?',

    }).then(function(response) {
        shell.echo( chalk.green('Okay let\'s go') );
    });
}

function generateFile(element) {
    var deferred = q.defer();

    const allIconList = interfaceIcons.concat(illustrationIcons);
    const svgList = {};

    allIconList.forEach(function(category){
        shell.echo( category.category );

        category.list.forEach(function(iconName){

            ['sm', 'lg'].forEach(function(iconSize) {
                const iconPath = `public/icons/${iconName}-${iconSize}.svg`;

                // Check if file exist
                fs.access(iconPath, fs.F_OK, (err) => {
                    if (err) {
                        shell.echo( `${chalk.red('This file should exist:')}` );
                        console.error(err);
                        return;
                    }
                })

                // If file exist, append SVG in array
                const iconSVG = shell.cat(iconPath).replace(/\n/g, '');
                svgList[iconName] = svgList[iconName] || {};
                svgList[iconName][iconSize] = iconSVG;
            });
        });
    });

    shell.echo( '-> svgList  ' + JSON.stringify(svgList) );
    const template = `
// This file is generated automatically with command:
// npm run generate-svg-ts

const iconList = ${JSON.stringify(svgList, null, 2)};
export default iconList;`;

    const buildFilePath = 'projects/front-end-library/src/lib/components/icon/svg/svg.ts';
    fs.writeFileSync(buildFilePath, template, 'utf-8');

    return { buildFilePath };
}

function success ({ buildFilePath }) {
    shell.echo( `\r` );
    shell.echo( chalk.green.bold('\n👍 Done! \r') );
    shell.echo( chalk.green('\nFile updated: \r') );
    shell.echo( chalk.green(`${buildFilePath}`) );
    shell.echo( chalk.green('------------------------------------------------------------------------------------') );
    shell.echo( `\r` );
}

// Start
requestInfo()
    .then(generateFile)
    .then(success);