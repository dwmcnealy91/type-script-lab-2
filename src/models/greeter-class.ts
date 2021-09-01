export default class Greeter {
    // list of properties
    greeting: string;
    // name: string <-- Does NOT go here, because it is not a property


    constructor(greeting: string) {
        this.greeting = greeting;
    }

    greet(name: string): string {
        return `${this.greeting}, ${name}!`
    }
}