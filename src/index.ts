export * from './types'


import { Message } from './types'


export function publishTsTest(): Message {
  return {
    msg: 'Hellow, this is publish-ts-test!'
  }
}
