var weather = require('weather-js');

var userSearch = (name, location) => {
    this.name = name;
    this.location = location;
    this.date = Date.now();

    this.myWeather = function() {
        weather.find({ search: this.location, degreeType: "F" }, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(JSON.stringify(result, null, 2));
            }
        });
    };

};

module.exports = userSearch;