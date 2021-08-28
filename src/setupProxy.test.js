const setupProxy = require("./setupProxy")
// @ponicode
describe("setupProxy", () => {
    test("0", () => {
        let callFunction = () => {
            setupProxy("http://www.croplands.org/account/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            setupProxy("https://api.telegram.org/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            setupProxy("www.google.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            setupProxy("http://www.example.com/route/123?foo=bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            setupProxy("https://croplands.org/app/a/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            setupProxy(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
