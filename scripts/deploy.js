import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building project...');
try {
  execSync('yarn build', { stdio: 'inherit' });
} catch (err) {
  console.log('Yarn build failed, trying npm build...');
  execSync('npm run build', { stdio: 'inherit' });
}

console.log('Deploying to gh-pages...');
const distDir = path.join(process.cwd(), 'dist');

try {
  execSync('git init', { cwd: distDir, stdio: 'inherit' });
  execSync('git checkout -b gh-pages', { cwd: distDir, stdio: 'inherit' });
  execSync('git add .', { cwd: distDir, stdio: 'inherit' });
  execSync('git commit -m "Deploy to GitHub Pages"', { cwd: distDir, stdio: 'inherit' });
  execSync('git remote add origin https://github.com/huevangxp/lao-lorem.git', { cwd: distDir, stdio: 'inherit' });
  execSync('git push -f origin gh-pages', { cwd: distDir, stdio: 'inherit' });
  console.log('Successfully deployed to gh-pages branch!');
} catch (error) {
  console.error('Deployment failed:', error);
} finally {
  // Clean up the temporary git folder
  const gitFolder = path.join(distDir, '.git');
  if (fs.existsSync(gitFolder)) {
    fs.rmSync(gitFolder, { recursive: true, force: true });
  }
}
