const { execSync } = require('child_process');
const { v4: uuidv4 } = require('uuid');

try {
  execSync(`hexo new ${uuidv4()}`)
} catch (err) {
  throw err;
}