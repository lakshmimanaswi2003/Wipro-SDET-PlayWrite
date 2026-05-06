//class Animal {
//    constructor(name) {
//        this.name = name;
//    }
//    speak() {
//        console.log(`${this.name} makes a sound.`);
//    }
//}
 
//const dog = new Animal("Jhonny");
//const cat = new Animal("Whiskers");
//dog.speak();
//cat.speak();


class greetings{
    constructor(greet){
        this.greet=greet;
    }
    display(){
        console.log(`${this.greet} everyone!`)
    }
}

const g=new greetings("hello");
g.display();