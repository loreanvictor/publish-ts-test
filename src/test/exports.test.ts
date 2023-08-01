import { publishTsTest, Message } from '../index'


test('everything is exported.', () => {
  expect(publishTsTest).toBeDefined()
  expect(<Message>{}).toBeDefined()
})
