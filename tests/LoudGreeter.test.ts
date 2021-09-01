import LoudGreeter from "../src/models/LoudGreeter";

describe("LoudGreeter", () => {
    test("add volume", () => {
        const myGreeter: LoudGreeter = new LoudGreeter("Hello");
        myGreeter.addVolume();
        const results = myGreeter.greet("Shaun");
        expect(results).toBe('Hello, Shaun!!!'); //three !!! from parent:greeter literal, one from hard code lourgreeter parameter, one from addvolume method
    })
})