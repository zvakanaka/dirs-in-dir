Get all directory names in a directory
## Examples
Normal usage:
```js
const dirsInDir = require('dirs-in-dir');
const directories = dirsInDir('/home/fred');
console.log(directories);
// ['Desktop', 'Documents', 'Downloads'...]
```

Ignore a directory:
```js
const ignore = ['Downloads'];
const someDirectories = dirsInDir('/home/fred', ignore);
console.log(someDirectories);
// ['Desktop', 'Documents'...]
```
