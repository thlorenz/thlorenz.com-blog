var from = require('from')
  , fs = require('fs')
  ;

// payloads have to be strings since stream only works with strings and buffers
from(['1', '2', '3'])
  .pipe(process.stdout);
