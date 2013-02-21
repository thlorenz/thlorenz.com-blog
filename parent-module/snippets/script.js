var util = require('util');

exports.hello = 'world';
console.log(util.inspect(module, false, 5, true));
