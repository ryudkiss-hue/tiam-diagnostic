import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STAGED_DIR = path.join(__dirname, 'docs/manifesto/staged');
const OUTPUT_TS = path.join(__dirname, 'src/data/manifestoContents.ts');

console.log('Regenerating manifestoContents.ts...');

// Read all staged manifesto files
const files = fs.readdirSync(STAGED_DIR).filter(f => f.endsWith('.md')).sort();

let tsContent = '// Automatically generated from docs/manifesto/staged/ by regenerate_manifesto_ts.js\n';
tsContent += `// Generated: ${new Date().toISOString()}\n\n`;
tsContent += 'export const manifestoContents: Record<string, string> = {\n';

files.forEach((file, idx) => {
  const key = file.replace('.md', '');
  const content = fs.readFileSync(path.join(STAGED_DIR, file), 'utf8');
  
  // Escape content for TypeScript string literal
  const escaped = content
    .replace(/\/g, '\\')
    .replace(/`/g, '\`')
    .replace(/\$/g, '\$');
  
  tsContent += `  '${key}': \`${escaped}\`,\n`;
});

tsContent += '};\n';

// Write TypeScript file
fs.writeFileSync(OUTPUT_TS, tsContent);
console.log(`✓ Generated: ${OUTPUT_TS}`);
console.log(`✓ Total size: ${(tsContent.length / 1024 / 1024).toFixed(2)} MB`);
console.log(`✓ Total manifestos: ${files.length}`);
