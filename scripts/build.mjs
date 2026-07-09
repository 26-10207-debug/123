import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('dist/src',{recursive:true});
await copyFile('index.html','dist/index.html');
await copyFile('src/styles.css','dist/src/styles.css');
await copyFile('src/app.js','dist/src/app.js');
console.log('Built dist/');
