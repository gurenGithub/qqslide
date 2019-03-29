var express = require('express');
var app = express();

var getCode=require('./index');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended:true
}));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})


var port=8404;

app.all('*', function(req, res, next) {
    console.log(req.method);
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-type');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
    res.header('Access-Control-Max-Age',1728000);//预请求缓存20天
    next();  
});
app.post('/getCode', function (req, res) {


    var url=req.body.url.replace(/guren/gi,'&');

    var width=req.body.width;

    var height=req.body.height;
    console.log(req.body);
    console.log(url);
   // 输出 JSON 格式
   response = {
       first_name:req.query.url,
       last_name:req.query.last_name
   };

   getCode(url,{width:width,height:height},function(options){

    console.log(options);

    res.end(JSON.stringify({left:options.left,top:options.top}));
   })
 
})

var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})