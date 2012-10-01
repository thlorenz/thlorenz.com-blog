var join  =  require('event-stream').join
  , split =  require('split')
  , fs    =  require('fs');

fs.createReadStream(__filename, { encoding: 'utf-8' })
  .pipe(split())
  .pipe(join('\n******\n'))
  .pipe(process.stdout);
