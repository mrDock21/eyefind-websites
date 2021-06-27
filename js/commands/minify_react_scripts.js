const directory = 'js/components/';
const min_directory = 'js/min-js/';
const fs = require('fs');
var shell = require('shelljs');

function minify(shell, filename) {
    // Run external tool synchronously
    if (shell.exec(`npx terser -c -m -o ${min_directory + filename} -- ${directory + filename}`).code !== 0) {
        shell.echo('Error: Terser command failed');
        shell.exit(1);
    }
}

// Remove old minJs files
shell.rm('-rf', min_directory);
shell.mkdir(min_directory);

// minify each js file
fs.readdir(directory, (err, files) => {
    files.forEach(file => {
        minify(shell, file);
    });
});