var express = require('express');
var push = express();
global.__root = __dirname +'/';
global.__db =require(__dirname+'/db.js');

var cyclemanagement =require(__root+'cycle_File/cyclemanagementcontroller.js');
push.use('/api/get',cyclemanagement);

module.exports=push;
