var https = require("https");

console.log("Calling rest service");
callRestGetService();
console.log("Done calling rest service");

function callRestGetService() {

  console.log("Inside rest web service");
  var username = 'admin';
  var password = 'Meen@kshi1994';
  var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

  var options = {
    //https://dev58038.service-now.com/api/now/table/x_223905_innvocate_kairos
    host : 'dev58038.service-now.com',
    port : 443,
    method : 'GET',
    path : '/api/now/table/x_223905_innvocate_kairos',
    // authentication headers
    headers: {
      'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64')
    }
  }


  console.log("Making call to rest web service");

  var req = https.request(options, res => {

    console.log("Inside rest service");


    res.setEncoding('utf8');
    var returnData = "";

    res.on('data', chunk => {
      returnData = returnData + chunk;
      console.log(returnData);
    });

    res.on('end',() => {
      console.log(returnData);
      var result1 = JSON.parse(returnData);
        console.log(result1.result[0].name);
      });
  });

  req.end();

}
