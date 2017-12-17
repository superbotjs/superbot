import fetch from 'node-fetch'
import { Update } from '../telegram-typings'


export const SERVER = {
  DEFAULT: 'https://api.telegram.org',
}

export function runLoop(fn: (update: Update) => void): () => void {

}
