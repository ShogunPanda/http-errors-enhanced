import { deepStrictEqual, match } from 'node:assert'
import { test } from 'node:test'
import { addAdditionalProperties, serializeError } from '../src/index.js'
import { lowerFirst, pascalCase, upperFirst, type GenericObject } from '../src/utils.js'

function verifySerialization(actual: GenericObject, expected: GenericObject): void {
  const actualStack: string[] = actual.stack ?? []
  actual.stack = undefined

  const expectedStack: RegExp[] = expected.stack ?? []
  expected.stack = undefined

  deepStrictEqual(actual, expected)

  for (let i = 0; i < expectedStack.length; i++) {
    match(actualStack[i], expectedStack[i])
  }
}

test('pascalCase', () => {
  deepStrictEqual(pascalCase('a BcD EfG'), 'ABcdEfg')
})

test('lowerFirst', () => {
  deepStrictEqual(lowerFirst('a BcD EfG'), 'a BcD EfG')
})

test('upperFirst', () => {
  deepStrictEqual(upperFirst('a BcD EfG'), 'A BcD EfG')
})

test('serializeError', () => {
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

  verifySerialization(serializeError(errorWithCode), {
    code: 'CODE',
    message: '[CODE] MESSAGE',
    stack: [/^TestContext\.<anonymous> \((?:file:\/\/)?\$ROOT\/test\/utils\.test\.ts:\d+:\d+\)$/],
    additional: 1
  })

  verifySerialization(serializeError(errorWithName), {
    name: 'NAME',
    message: '[NAME] MESSAGE',
    stack: [/^TestContext\.<anonymous> \((?:file:\/\/)?\$ROOT\/test\/utils\.test\.ts:\d+:\d+\)$/]
  })

  verifySerialization(serializeError(fooError), {
    name: 'FooError',
    message: '[FooError] MESSAGE',
    stack: []
  })

  verifySerialization(serializeError(regularError), {
    message: '[Error] MESSAGE',
    stack: [/^TestContext\.<anonymous> \((?:file:\/\/)?\$ROOT\/test\/utils\.test\.ts:\d+:\d+\)$/]
  })

  verifySerialization(serializeError(obj as Error), {
    message: '[Error] MESSAGE',
    stack: [/^TestContext\.<anonymous> \((?:file:\/\/)?\$ROOT\/test\/utils\.test\.ts:\d+:\d+\)$/]
  })

  verifySerialization(serializeError(obj as Error, false), {
    message: '[Error] MESSAGE'
  })
})
