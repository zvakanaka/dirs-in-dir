const fs = require('fs');
const path = require('path');

/**
 * Get all directory names within a directory
 * @param  {string}   [base='.']   directory to get directories within
 * @param  {string[]} [ignore=[]]  directory names to ignore
 * @return {string[]}              array directory names within base directory
 */
function dirsInDir(base='.', ignore=[]) {
  if (!fs.existsSync(base)) throw new Error(`Directory "${base}" does not exist`);
  const dirs = fs.readdirSync(base)
    .filter(file => {
      if (fs.statSync(`${base}/${file}`).isDirectory()
        && (ignore.indexOf(file)===-1)) return true;
    });
  return dirs;
}

module.exports = dirsInDir;
