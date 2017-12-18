import { createLongpollClient, SERVER } from './network/longpoll'
import type { Update } from './telegram-typings'


const start = createLongpollClient(SERVER.DEFAULT)
const handler = (update: Update) => {
  console.log(update)
}

const stop = start('458060235:AAFgG--yeMK2sobG66r4agUxbHQFa3HE2rI', handler)

setTimeout(stop, 5000)

