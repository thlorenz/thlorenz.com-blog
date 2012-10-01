var es = require('event-stream') ;

function multiplyByTen (item, cb) {
  // long running async operation ;)
  setTimeout(
      function () { cb(null, item * 10); }
    , 50
  );
}

function validate(err, array) {
  if (!err && array.toString() === '0,10,20,30')
   console.log('OK');
  else 
   console.log('NOT OK');
}

es.readArray([0, 1, 2, 3])        // generate data
  .pipe(es.map(multiplyByTen))    // transform asynchronously 
  .pipe(es.writeArray(validate)); // validate and print result
