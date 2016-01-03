var fs = require('fs');
var ejs = require('ejs'); // loading EJS into our project
var tumblr = require('tumblr.js');

var csvFile = fs.readFileSync("friend_list.csv", "utf8");
var emailTemplate = fs.readFileSync("email_template.ejs", "utf8");

function csvParse(file) {
  var arrayLines = file.split("\n");
  lines = arrayLines.slice(0, arrayLines.length - 1)
  var keys = lines[0].split(",");
  var arrayOfObjects = [];
  for (var i = 0; i < lines.length - 1; i++) {
    arrayOfObjects[i] = {};
    for (var j = 0; j < keys.length; j++) {
        arrayOfObjects[i][keys[j]] = lines[i + 1].split(",")[j];    
    }
  }

  return arrayOfObjects;
}

var contactInfo = csvParse(csvFile);

var client = tumblr.createClient({
  consumer_key: 'C0W3ktczxDQH2v1Cd4eCCCt0MaBA7BsS62eqrizrs0pU09NCmf',
  consumer_secret: 'We68CpjELEXJswQ8d1FVeUTmy44ZIqkZLh3T61ya4f3gdj0grY',
  token: 'wrANc45xPaLA7JYZZY8YzekIjPNematqkIBbh0OvaAb95XDEcC',
  token_secret: 'Wuwhus1qI2x14VKbIKlUXFvUREgnWBTIql9ddLOrVdEDBA7mpR'
});

// posts function

var customizedTemplate = ejs.render(emailTemplate, contactInfo[0]);









// var fs = require('fs');
// var ejs = require('ejs');

// var csvFile = fs.readFileSync("friend_list.csv", "utf8");
// var emailTemplate = fs.readFileSync("email_template.html", "utf8");

// function csvParse(csvFile) {
//   var arrayLines = csvFile.split("\n");
//   lines = arrayLines.slice(0, arrayLines.length - 1)
//   var keys = lines[0].split(",");
//   var arrayOfObjects = [];
//   for (var i = 0; i < lines.length - 1; i++) {
//     arrayOfObjects[i] = {};
//     for (var j = 0; j < keys.length; j++) {
//         arrayOfObjects[i][keys[j]] = lines[i + 1].split(",")[j];    
//     }
//   }

//   return arrayOfObjects;
// }

// function createEmail(file, template) {
//   var contactInfo = csvParse(file);
//   for (var i = 0; i < contactInfo.length; i++) {
//     var email = template.replace("FIRST_NAME", contactInfo[i].firstName).replace("NUM_MONTHS_SINCE_CONTACT", contactInfo[i].numMonthsSinceContact);
//     console.log(email);
//   }
// }

// console.log(createEmail(csvFile, emailTemplate));