const fs = require('fs');

const plDirectory = [
  "_patterns/00-atoms/",
  "_patterns/01-molecules/",
  "_patterns/02-organisms/",
  "_patterns/03-templates/",
];


let filesName, files = [];

// Create array of file mapping
plDirectory.forEach((firstDirName)=>{
  // console.log(dirPath);
  const firstDirPath = './source/' + firstDirName;
  let plSubDirectory = fs.readdirSync(firstDirPath);

  // console.log(dir);
  // console.log('------------------------------');
  plSubDirectory.forEach((secondDirName)=>{
    let secondDirPath = firstDirPath + secondDirName;

    try {
      filesName = fs.readdirSync(secondDirPath);
    } catch(e){}

    // console.log(files);
    filesName.forEach((currentFile)=>{
      files.push(firstDirPath + secondDirName + '/' + currentFile);
    });
  });
});

// Edit filename for correct PL namespace integration
const filesWithPLNamespace = files.map((filePath) => {
  // console.log(filePath);

  return filePath.replace("./source/_patterns/00-atoms/", "@atoms/")
                    .replace("./source/_patterns/01-molecules/", "@molecules/")
                    .replace("./source/_patterns/02-organisms/", "@organisms/")
                    .replace("./source/_patterns/03-templates/", "@templates/");
});

// Convert array to json
const filesJson = filesWithPLNamespace.reduce((json, value, index) => {
  json[value] = index;
  return json;
}, {});
// console.log(filesJson);

// stringify JSON Object
const jsonContent = JSON.stringify(filesJson);
fs.writeFile('./scripts/migration/migration-path-map.json', jsonContent, 'utf8', function (err) {
  if (err) throw err;
  console.log('-> File was created successfully!');
});

// console.log(files);


