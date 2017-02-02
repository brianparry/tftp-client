var tftp = require('tftp');
var parseArgs = require('minimist');
var argv = parseArgs(process.argv.slice(2));
var assert = require('assert-plus');

var reqMethod = argv._[0];
var reqFile = argv._[1];
var reqHost = argv._[2];

assert.string(reqMethod);
assert.string(reqFile);
assert.string(reqHost);

var clientArgs = {
    host: reqHost.split(':')[0],
    port: parseInt(reqHost.split(':')[1]) || 69,
    timeout: argv.timeout,
    blockSize: argv.b || argv.blksize,
    windowSize: argv.w || argv.windowsize,
    tsize: argv.t || argv.tsize
}


var client = tftp.createClient(clientArgs);
var methods = {
     'get': function(cb) {
         client.get(reqFile, cb);
     },
     'put': function(cb) {
          return cb(new Error('put is not supported yet'));
     }
}
console.log(clientArgs);

if (typeof methods[reqMethod] === 'function') {
    methods[reqMethod](function(err) {
        if (err) return console.error(err);
        console.log('called ' + reqMethod);
    });
} else {
    console.error(reqMethod + ' is not a valid TFTP method');
}


