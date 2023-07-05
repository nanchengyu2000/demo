var express = require('express');
 var app = express();
 const hostname = '192.168.43.84';
 const port = 8081;
 app.use(express.static('./'));
 app.listen(port, hostname, () => {
  console.log(` running ......`);
 });
