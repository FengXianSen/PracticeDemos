//  一个"麻雀虽小，五脏俱全"完整的基于 Node.js 的 web 应用

var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');


var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;


server.start(router.route, handle);


