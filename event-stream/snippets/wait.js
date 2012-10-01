var es = require('event-stream');

es.readArray([ 'e', 'l', 'u', 'r', ' ', 's', 'm', 'a', 'e', 'r', 't', 's' ].reverse())
  .pipe(es.wait())
  .pipe(es.mapSync(function (data) { return '"' + data + '!"'; }))
  .pipe(process.stdout);
