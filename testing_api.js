var tumblr = require('tumblr.js');

var client = tumblr.createClient({
  consumer_key: 'C0W3ktczxDQH2v1Cd4eCCCt0MaBA7BsS62eqrizrs0pU09NCmf',
  consumer_secret: 'We68CpjELEXJswQ8d1FVeUTmy44ZIqkZLh3T61ya4f3gdj0grY',
  token: 'wrANc45xPaLA7JYZZY8YzekIjPNematqkIBbh0OvaAb95XDEcC',
  token_secret: 'Wuwhus1qI2x14VKbIKlUXFvUREgnWBTIql9ddLOrVdEDBA7mpR'
});

client.posts('alyssaathopperacademy.tumblr.com', function(err, blog){
  for (var i = 0; i < blog.posts.length; i++) {
    Date.prototype.getDay() - blog.posts[i].date.
  }
})