import Greeter from "../src/models/greeter-class";
import Player from "../src/models/Player";

describe("Greeter", () => {
    //constructor tests
    test("Test greet method, returns string with greeting (Hello) and name (Derek)", () => {
        // Arrange
        const myGreeter: Greeter = new Greeter("Hello");
        //Act: 
        const result = myGreeter.greet("Derek");
        //Assert: 
        expect(result).toBe("Hello, Derek!");
        //expect(myGreeter.greet("Derek")).toBe("Hello, Derek!"); one line
    });
    test("Test greet method, returns string with greeting (See Ya Later) and name (Will)", () => {
        // Arrange
        const myGreeter: Greeter = new Greeter("See Ya Later");
        //Act: 
        const result = myGreeter.greet("Will");
        //Assert: 
        expect(result).toBe("See Ya Later, Will!");
        //expect(myGreeter.greet("Will")).toBe("See Ya Later, Will!"); one line
    });

})