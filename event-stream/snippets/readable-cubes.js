var es = require('event-stream');

function threeCubes (count, cb) {
  if (count < 3) {
    this.emit('data', 'Cubing ' + count);
    this.emit('data', count * count * count);
    this.emit('data', 'OK');
    cb();
  } else {
    this.emit('end');
  }
}

es.readable(threeCubes)
  .pipe(es.stringify())
  .pipe(process.stdout);
