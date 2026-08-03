const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fileDir = path.join(dir, file);
    const stat = fs.statSync(fileDir);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fileDir));
    } else {
      results.push(fileDir);
    }
  });
  return results;
}

const files = walk('src').filter(f => f.match(/\.(ts|tsx|js|jsx)$/));
const entryPoints = ['src/main.tsx', 'src/App.tsx', 'src/vite-env.d.ts'];

const unused = [];

files.forEach(file => {
  if (entryPoints.includes(file)) return;
  
  const base = path.basename(file, path.extname(file));
  
  // Exclude some common files that might not be explicitly imported
  if (base === 'index' || base.includes('.test') || base.includes('.spec')) return;

  let found = false;
  for (const src of files) {
    if (src === file) continue;
    const content = fs.readFileSync(src, 'utf-8');
    
    // Check if imported
    if (content.includes(`/${base}`) || content.includes(`'${base}'`) || content.includes(`"${base}"`) || content.includes(`./${base}`) || content.includes(`@/components/${base}`) || content.includes(`@/pages/${base}`) || content.includes(`@/lib/${base}`) || content.includes(`@/data/${base}`) || content.includes(`@/hooks/${base}`) || content.match(new RegExp(`import.*${base}`, 'i'))) {
      found = true;
      break;
    }
  }
  
  if (!found) {
    unused.push(file);
  }
});

console.log("Found " + unused.length + " potentially unused files:");
unused.forEach(u => console.log(u));
