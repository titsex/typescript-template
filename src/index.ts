import Logger from '@class/Logger'

async function sayHelloWorld() {
    Logger.info(process.env.HELLO_WORLD)
}

await sayHelloWorld()
