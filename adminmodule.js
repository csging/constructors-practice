var userType = process.argv[2];
var name = process.argv[3];
var location = process.argv[4];

if (userType === "user") {
    weather();
} else if (userType === "admin") {
    admin()
} else { console.log('you entered a wrong command') };

var fs = require("fs");
var userSearch = require("./usermodule")
var moment = require("moment");

var weatherAdmin = () => {
    this.getData = function() {
        fs.readFile("log.txt", "utf8", function(error, data) {
            console.log(data);
        });
    };
    this.newUserSearch = function(name, location) {
        var newUserSearch = new userSearch(name, location);
        var logTxt = "\nName: " + newUserSearch.name + " Location: " + newUserSearch.location + " Date: " + moment(newUserSearch.date).format("MM-DD-YYYY");
        fs.appendFile("log.txt", logTxt, function(err) {
            if (err) throw err;
        });
        newUserSearch.getWeather();
    };
};