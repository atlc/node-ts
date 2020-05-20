"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var rp = require("request-promise");
var articleStore = path.join(__dirname, 'popular-articles.json');
var articles = [];
rp('https://reddit.com/r/popular.json')
    .then(function (data) {
    var posts = JSON.parse(data.toString()).data.children;
    posts.forEach(function (p) { return articles.push({ "title": p.data.title, "url": p.data.url, "author": p.data.author }); });
})
    .then(function () { return fs.writeFileSync(articleStore, JSON.stringify(articles)); })["catch"](function (err) { return console.log(err); });
