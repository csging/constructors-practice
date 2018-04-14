//name
//role
//gender
//age
//strength
//hp
//print stats
var menu = process.args[2];
var charOne = process.args[3];
var charTwo = process.args[4];

function character(charName, role, gender, age, str, hp) {
    this.charName = charName;
    this.role = role;
    this.gender = gender;
    this.age = age;
    this.str = str;
    this.hp = hp;
}

var wizard = new character('Zod', 'mage', 'F', 18, 15, 15);
var warrior = new character('Owen', 'melee', 'M', 28, 25, 20);
var rogue = new character('Xian', 'rogue', 'M', 25, 20, 20);

const printStats = (name) => { console.log(name) };

printStats(wizard);

const isAlive = (hp) => {
    if (this.hp <= 0) {
        console.log("You DIED");
    }
};
const attack = () => {

};
const levelUp = (age, str, hp) => {
    this.age = age + 1;
    this.str = str + 5;
    this.hp = hp + 25;
};

const battle = (char1, char2) => {
    console.log(charOne);
    console.log(charTwo);
}