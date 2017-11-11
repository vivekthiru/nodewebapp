console.log ("hello world");

var express = require("express")
var bodyParser = require("body-parser")

var app = express();

var Client = require('node-rest-client').Client;
var client = new Client();

//var async = require('async');
var request = require('request');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

var url = "https://e4aac8ed-9ba4-4927-98e2-e49610c80a32.mock.pstmn.io";
var accountpath = "/test";
var customerpath = "/customer/getcustomer";
console.log("step 2")



console.log("step 3")


//client.get(url+"/account/getaccount", function (data, response) {
    // parsed response body as js object 
//    console.log(data);
    // raw response 
   // console.log(response);
//});



//client.get(url+"/customer/getcustomer", function (data, response) {
    // parsed response body as js object 
   // console.log(data);
    // raw response 
   // console.log(response);
//});
console.log("step 4")



var handlerestapi = function(url){
          return new Promise(function(resolve, reject) {
        request(url, function(err, res, body) {
            console.log (url)
            if (err) { return reject(err); }
            return resolve([body]);
        });



    });
};


app.get("/",(req,res)=>{

    
Promise.all([handlerestapi(url+accountpath), handlerestapi(url+customerpath)])
.then(function(allData) {
    res.contentType("text/html");
    res.send('<html><body><b>'+allData+'</b></body></html>');
    console.log (allData)
});


})

app.listen(8090)

