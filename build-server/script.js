const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

async function init() {
  console.log('Executing script.js...');
  const outDirPath = path.join(__dirname, 'output');

  const out = exec(`cd ${outDirPath} && npm install && npm run build`);

  out.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  out.stdout.on('error', (data) => {
    console.log('Error:', data.toString());
  });

  out.on('close', () => {
    console.log('Build Complete');
    const distFolderPath = path.join(__dirname, 'output', 'dist');
    const distFolderContents = fs.readdirSync(distFolderPath, {
      recursive: true,
    });

    for (const filePath of distFolderContents) {
      if (fs.lstatSync(filePath).isDirectory()) continue;

      
    }
  });
}
