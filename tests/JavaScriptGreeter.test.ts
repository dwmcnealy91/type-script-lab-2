import JavaScriptGreeter from "../src/models/JavaScriptGreeter";

describe("JavaScriptGreeter", () => {
    test("test with different greetings and names", () => {
        const myGreeter: JavaScriptGreeter = new JavaScriptGreeter("Hello");
        const results = myGreeter.greet("Derek");// method has to be attached to obj, obj constructed from classes.
        expect(results).toBe('console.log("Hello, Derek!")')
    });
    test("test with different greetings and names", () => {
        const myGreeter: JavaScriptGreeter = new JavaScriptGreeter("Howdy");
        const results = myGreeter.greet("Matt");// method has to be attached to obj, obj constructed from classes.
        expect(results).toBe('console.log("Howdy, Matt!")')
    });

}) 