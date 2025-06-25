import Logger from '@class/Logger'

await new Promise<void>((resolve) => {
	setTimeout(() => {
		Logger.info(process.env.HELLO_WORLD as string)
		resolve()
	}, 2311)
})
