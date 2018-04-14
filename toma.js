function toma(tomaName, hungry, sleepy, bored, age) {
    this.tomaName = tomaName;
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;
}
var menu = process.argv[2];
var doggie = new toma('Pup', 'true', 'true', 'true', 0);
// console.log(doggie);

const status = () => { console.log(doggie) }


const feed = (hungry) => {
    console.log("Am I hungry?...")
    if (hungry = 'true') {
        console.log("That was yummy")
        hungry === 'false';
        status();
    } else if (hungry = 'false') {
        console.log("No thanks! I'm full!");
        status();
        hungry === 'true';
    }
}

const sleep = (sleepy) => {
    console.log("Am I sleepy?...")
    if (sleepy = true) {
        console.log("Zzzzzzzzzzz");
        sleepy === false;
        status();
    } else if (sleepy = false) {
        console.log("well-rested and ready!");
        status();
        sleepy === true;
    }

}

const play = (bored) => {
    console.log("lets play!...")
    if (bored = true) {
        console.log("yay! let's play!");
        bored === false;
        status();
    } else if (bored = false) {
        console.log("not right now, later?");
        status();
        bored === true;
    }
}

const increaseAge = () => {

}
switch (menu) {
    case "feed":
        feed();
        break;
    case "sleep":
        sleep();
        break;
    case "play":
        play();
        break;
    case "status":
        status();
        break;
    default:
        console.log("Enter a command: Feed, Sleep, Play, Status");
}