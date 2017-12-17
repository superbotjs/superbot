import createDebug from 'debug'
import fetch from 'node-fetch'
import type { Response } from 'node-fetch'

import type { Update } from '../telegram-typings'


const debug = createDebug('superbot:network:longpoll')


function loop<T>(
  request: () => Promise<T>,
  handler: (update: T) => void,
  errorHandler: (error: Error) => void,
): () => () => void {
  debug('create loop')
  let work = true

  async function totalRun() {
    let it = 0

    while (work) {
      it++
      debug('iteration', it)
      try {
        const result = await request()

        if (work) {
          handler(result)
        }
      }
      catch (error) {
        debug('iteration error', it, error)
        if (work) {
          errorHandler(error)
        }
      }
    }
  }

  return function start() {
    debug('start loop')
    setTimeout(totalRun, 1)

    return function stop() {
      debug('stop loop')
      work = false
    }
  }
}

type UpdateHandler = (update: Update) => void

export function createLongpollClient(server: string, timeout: number = 10000) {
  const errorHandler = (error: Error) => debug('longpoll error', error)

  return function startClient(botToken: string, handler: UpdateHandler) {
    const request = () => fetch(`${server}/bot${botToken}/getUpdates?timeout=${timeout}`, { timeout })
      .then((response: Response): Promise<{ ok: boolean, result: Update[] }> => response.json())
      .then(answer => answer.ok ? answer.result : [])

    const updateHandler = (updates: Update[]) => {
      updates.forEach(handler)
    }

    const start = loop(request, updateHandler, errorHandler)

    return start()
  }
}

export const SERVER = {
  DEFAULT: 'https://api.telegram.org',
}
