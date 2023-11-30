import Logger from 'classes/Logger'

import { sayHelloWorld, someError } from '@utils'

Logger.info(sayHelloWorld())

try {
    someError()
} catch (error) {
    if (error instanceof Error) Logger.error(error.message)
    else Logger.error(error)
}
