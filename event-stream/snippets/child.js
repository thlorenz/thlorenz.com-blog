var cp = require('child_process')
  , fs = require('fs')
  , es = require('event-stream');

// same as: > cat thisfile | grep Stream
fs.createReadStream(__filename)
  .pipe(es.child(cp.exec('grep Stream')))
  .pipe(process.stdout);
