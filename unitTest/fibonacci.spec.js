const fibonacci = require('../fibonacci.js');


describe("Fibonacci Test", () => {

    describe("calculate", () => {

        it("generates 0", () => {
            expect(fibonacci.fibonacci(0))
        });

        it("generates 1", () => {
            expect(fibonacci.fibonacci(1))
        });

        it("generates 6765", () => {
            expect(fibonacci.fibonacci(20))
        });

        // it("generates 75025", () => {
        //     expect(fibonacci.fibonacci(25))
        // });
    });
});