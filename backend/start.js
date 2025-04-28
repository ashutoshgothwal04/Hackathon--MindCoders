import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Starting backend server...');

const server = exec('node index.js', { cwd: __dirname });

server.stdout.on('data', (data) => {
  console.log(data);
});

server.stderr.on('data', (data) => {
  console.error(data);
});

server.on('close', (code) => {
  console.log(`Backend server exited with code ${code}`);
}); 