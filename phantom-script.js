var system = require('system');
var args = system.args;

var unusedArg = args[1];

var page = require('webpage').create();

system.stdout.write('hello from phantom!');

page.open('http://phantomjs.org', function() {
    var elementValue = page.evaluate(function() {
      return document.getElementById('feature-01').textContent;
    });
    system.stdout.write(elementValue);
  phantom.exit()
});
