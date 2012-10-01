var map   =  require('map-stream')
  , split =  require('split')
  , fs    =  require('fs');

function count () {
  return map(function (data, cb) {
    // ignore empty lines
    data.length ? 
      cb(null, 'chars: ' + data.length + '\t' + data + '\n') : 
      cb();
  });
}

fs.createReadStream(__filename, { encoding: 'utf-8' })
  .pipe(split())
  .pipe(count())
  .pipe(process.stdout);
