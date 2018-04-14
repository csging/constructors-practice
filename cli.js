var weatherAdmin = require('./adminmodule.js');
var newUser = require('./usermodule.js');
// var admin = require('./adminmodule.js');


var myWeather = new weather();

if (userType === "admin") {
    myWeather.getData();

} else {
    myWeather.userSearch(name, location);

}



// const findWeather = (name, location) => {
//     console.log("woah, its the weather in " + this.location + "!");
//     weather.find({ search: this.location, degreeType: 'F' }, function(err, result) {
//         if (err) console.log(err);

//         console.log(JSON.stringify(result, null, 2));
//     });

// }

// const getData = () => {
//     console.log("datas got!")
// }