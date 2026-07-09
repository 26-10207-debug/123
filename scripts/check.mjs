import fs from 'node:fs';
for (const f of ['index.html','src/styles.css','src/app.js']) if(!fs.existsSync(f)) throw new Error(`Missing ${f}`);
const js=fs.readFileSync('src/app.js','utf8');
for (const token of ['Paper Moon','CEREAL Magazine Issue 26','renderTracking','query']) if(!js.includes(token)) throw new Error(`Missing flow token ${token}`);
console.log('Static app checks passed');
