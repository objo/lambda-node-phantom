var system = require('system');
var args = system.args;
var page = require('webpage').create();

url = "http://phantomjs.org";
selector = "#feature-01 > div > p";

page.open(url, function() {
  var elementValue = page.evaluate(function(selector) {
      return document.querySelector(selector).textContent;
  }, selector);
  system.stdout.write(elementValue);
  phantom.exit();
});
