class programmer {

    constructor(name, job, age, language) {
        this.name = name;
        this.job = job;
        this.age = age;
        this.language = language;
    }

    print() {
        console.log("Name: " + this.name + "\nRole: " + this.job + "\nAge: " + this.age + "\nFave: " + this.language + "\n")
    }
}

let bob = new programmer("bob", "pro", 22, "all");
bob.print();

let chris = new programmer("Chris", "Web Master", 9001, "godmode");
chris.print();