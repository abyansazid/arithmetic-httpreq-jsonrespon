// server.js
var http = require("http"); // 1 - Import Node.js core module
var server = http.createServer(function (req, res) {
  //create web server
  if (req.url == "/") {
    //check the URL of the current request

    // set response header
    res.writeHead(200, { "Content-Type": "text/html" });

    // set response content
    res.write("<html><body><p>ini halaman utama home page</p></body></html>");
    res.end();
  } else if (req.url == "/profile") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<html><body><p>My Nama Saya Abyan Sazid Yusuf.</p></body></html>"
    );
    res.write("<html><body><p>Alamat Jl. Titiran Dalam 2</p></body></html>");
    res.write("<html><body><p>Umur 22</p></body></html>");
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<html><body><p>Hubungi saya di abyan_andone@yahoo.com</p></body></html>"
    );
    res.write("<html><body><p>saya tinggal di bandung.</p></body></html>");
    res.end();
  } else if (req.url == "/aboutus") {
    res.writeHead(300, { "Content-Type": "text/html" });
    res.write("<html><body><p>hobbi saya bermain basket</p></body></html>");
    res.write("<html><body><p>gaming</p></body></html>");
    res.end();
  } else res.end("Invalid Request!");
});
server.listen(3000); //3 - listen for any incoming requests
console.log("Node.js web server at port 3000 is running...");
