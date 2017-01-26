var system = require('system');
var args = system.args;
var page = require('webpage').create();

mySelector = args[1];

system.stdout.write(mySelector);

page.open('http://phantomjs.org', function() {
  var elementValue = page.evaluate(function(mySelector) {
      return document.querySelector(mySelector).textContent;
  }, mySelector);
  system.stdout.write(elementValue);
  phantom.exit();
});
