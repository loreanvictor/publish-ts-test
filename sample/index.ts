import { publishTsTest } from '../src'

document.querySelector('main')!.innerHTML = `<h1>${publishTsTest().msg}</h1>`
