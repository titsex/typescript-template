export function sayHelloWorld(): string {
    return process.env.HELLO_WORLD!
}

export function someError(): Error {
    throw new Error('1')
}
