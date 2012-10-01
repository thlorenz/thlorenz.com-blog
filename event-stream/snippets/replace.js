var replace =  require('event-stream').replace
  , fs    =  require('fs');

fs.createReadStream(__filename, { encoding: 'utf-8' })
  .pipe(replace('\n', '\n******\n'))
  .pipe(process.stdout);
