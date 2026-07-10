import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STAGED_DIR = path.join(__dirname, 'docs/manifesto/staged');
const OUTPUT_MD = path.join(__dirname, 'docs/manifesto/compiled_manifesto.md');

console.log('Regenerating compiled manifesto outputs...');
console.log(`Reading from: ${STAGED_DIR}`);

// Read all staged manifesto files
const files = fs.readdirSync(STAGED_DIR).filter(f => f.endsWith('.md')).sort();
console.log(`Found ${files.length} manifestos`);

// Concatenate all manifestos
let compiled = '# AI Worldview Atlas: Complete Manifesto Collection\n\n';
compiled += `Generated: ${new Date().toISOString()}\n`;
compiled += `Total Manifestos: ${files.length}\n`;
compiled += `Total Word Count: ${files.reduce((sum, f) => {
  const content = fs.readFileSync(path.join(STAGED_DIR, f), 'utf8');
  return sum + content.split(/\s+/).length;
}, 0)} words\n\n`;
compiled += '---\n\n';

// Add each manifesto
files.forEach((file, idx) => {
  const content = fs.readFileSync(path.join(STAGED_DIR, file), 'utf8');
  const wordCount = content.split(/\s+/).length;
  compiled += `## ${idx + 1}. ${file.replace('.md', '').replace(/-/g, ' ').toUpperCase()}\n`;
  compiled += `**(${wordCount} words)**\n\n`;
  compiled += content + '\n\n';
  compiled += '---\n\n';
});

// Write combined manifesto
fs.writeFileSync(OUTPUT_MD, compiled);
console.log(`✓ Generated: ${OUTPUT_MD}`);
console.log(`✓ Total size: ${(compiled.length / 1024).toFixed(2)} KB`);
