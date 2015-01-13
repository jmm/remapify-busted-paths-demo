var
  browserify = require('browserify'),
  remapify = require('remapify'),
  path = require('path'),
  b,
  remapify_opts = [];

remapify_opts = [
  {
    src: './**/*.js',
    expose: 'app',
    cwd: path.join(__dirname, 'src'),
  }
];

b = browserify('./src/entry')
  .plugin(remapify, remapify_opts)
  .bundle()
  .pipe(process.stdout);
