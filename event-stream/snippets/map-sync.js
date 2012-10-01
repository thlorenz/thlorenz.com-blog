var mapSync =  require('event-stream').mapSync
  , split   =  require('split')
  , fs      =  require('fs');

function count () {
  return mapSync(function (data) {
    // ignore empty lines
    return data.length ? 
      'chars: ' + data.length + '\t' + data + '\n' : 
      undefined;
  });
}

fs.createReadStream(__filename, { encoding: 'utf-8' })
  .pipe(split())
  .pipe(count())
  .pipe(process.stdout);
