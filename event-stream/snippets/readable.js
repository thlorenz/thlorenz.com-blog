var es = require('event-stream');

function tenSquares (count, cb) {
  return count < 10 ? cb(null, count * count) : this.emit('end');
}

es.readable(tenSquares)
  .pipe(es.stringify())
  .pipe(process.stdout);
