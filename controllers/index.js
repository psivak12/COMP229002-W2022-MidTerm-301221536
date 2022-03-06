/*
File Name: index.js
Author Name: Pavithran Siva Kumar
Student ID: 301221536
*/
exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
