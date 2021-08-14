/* eslint-disable @typescript-eslint/no-floating-promises */

import t from 'tap'
import { addAdditionalProperties, serializeError } from '../src'
import { lowerFirst, pascalCase, upperFirst } from '../src/utils'

type Test = typeof t

t.test('pascalCase', (t: Test) => {
  t.plan(1)
  t.equal(pascalCase('a BcD EfG'), 'ABcdEfg')
})

t.test('lowerFirst', (t: Test) => {
  t.plan(1)
  t.equal(lowerFirst('a BcD EfG'), 'a BcD EfG')
})

t.test('upperFirst', (t: Test) => {
  t.plan(1)
  t.equal(upperFirst('a BcD EfG'), 'A BcD EfG')
})

t.test('serializeError', (t: Test) => {
  t.plan(6)

  class FooError extends Error {
    constructor(message: string) {
      super(message)
      this.name = 'FooError'
    }
  }

  const errorWithCode = new Error('MESSAGE')
  const errorWithName = new Error('MESSAGE')
  const fooError = new FooError('MESSAGE')
  const regularError = new Error('MESSAGE')
  const obj = { message: 'MESSAGE', stack: errorWithCode.stack }

  addAdditionalProperties(errorWithCode, { code: 'CODE', additional: 1 })
  addAdditionalProperties(errorWithName, { message: 'ANOTHER-MESSAGE' })
  errorWithName.name = 'NAME'
  fooError.stack = undefined

  t.match(serializeError(errorWithCode), {
    message: '[CODE] MESSAGE',
    stack: [/^(?:Test\.<anonymous> \((?:file:\/\/)?\$ROOT\/test\/utils\.test\.ts:\d+:\d+\))$/],
    additional: 1
  } as any)

  t.match(serializeError(errorWithName), {
    message: '[NAME] MESSAGE',
    stack: [/^(?:Test\.<anonymous> \((?:file:\/\/)?\$ROOT\/test\/utils\.test\.ts:\d+:\d+\))$/]
  } as any)

  t.match(serializeError(fooError), {
    message: '[FooError] MESSAGE',
    stack: []
  } as any)

  t.match(serializeError(regularError), {
    message: '[Error] MESSAGE',
    stack: [/^(?:Test\.<anonymous> \((?:file:\/\/)?\$ROOT\/test\/utils\.test\.ts:\d+:\d+\))$/]
  } as any)

  t.match(serializeError(obj as any), {
    message: '[Error] MESSAGE',
    stack: [/^(?:Test\.<anonymous> \((?:file:\/\/)?\$ROOT\/test\/utils\.test\.ts:\d+:\d+\))$/]
  } as any)

  t.match(serializeError(obj as any, false), {
    message: '[Error] MESSAGE'
  } as any)
})
