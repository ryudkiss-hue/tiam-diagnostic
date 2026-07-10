import fs from 'fs';
import path from 'path';

const STAGED_DIR = 'docs/manifesto/staged';
const OUTPUT_TS = 'src/data/manifestoContents.ts';

console.log('Regenerating manifestoContents.ts...');

const files = fs.readdirSync(STAGED_DIR).filter(f => f.endsWith('.md')).sort();

let tsContent = '// Automatically generated from docs/manifesto/staged/\n';
tsContent += `// Generated: ${new Date().toISOString()}\n\n`;
tsContent += 'export const manifestoContents: Record<string, string> = {\n';

files.forEach((file) => {
  const key = file.replace('.md', '');
  const content = fs.readFileSync(path.join(STAGED_DIR, file), 'utf8');
  const escaped = content.replace(/\/g, '\\').replace(/`/g, '\`').replace(/\$/g, '\$');
  tsContent += `  '${key}': \`${escaped}\`,\n`;
});

tsContent += '};\n';

fs.writeFileSync(OUTPUT_TS, tsContent);
console.log(`✓ Generated: ${OUTPUT_TS}`);
console.log(`✓ File size: ${(tsContent.length / 1024 / 1024).toFixed(2)} MB`);
console.log(`✓ Manifestos: ${files.length}`);
