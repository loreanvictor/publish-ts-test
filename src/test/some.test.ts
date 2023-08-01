import { type } from 'ts-inference-check'

import { publishTsTest } from '..'
import { Message } from '../types'


describe(publishTsTest, () => {
  test('does stuff.', () => {
    expect(publishTsTest().msg).toBe('Hellow, this is publish-ts-test!')
  })

  test('returns the proper type.', () => {
    expect(type(publishTsTest()).is<Message>(true)).toBe(true)
  })
})
