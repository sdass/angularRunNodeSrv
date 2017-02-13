How to use nodeJS httpserver to run (test develop) angularJS codes?

1. do all those npm install nodejs, etc to test and run nodejs server [as one saved in github]
2. npm install http-server -g # install http-server as a global module .Will be accessed/started from command line as below 
http-server [path] [options]
http-server -o
http-server - http://localhost -o
read each log line after server starts.

-o #Open browser window after starting the server
https://www.npmjs.com/package/http-server # guide for options


Other notes
route help taken from: https://scotch.io/tutorials/single-page-apps-with-angularjs-routing-and-templating
navigation home url tricky href taken from w3c example  <li><a href="#/">
index.html is base and other pages/* are partials