/* eslint-disable @typescript-eslint/no-floating-promises */

import createHttpError from 'http-errors'
import t from 'tap'
import { createError, HttpError, isHttpError } from '../src/index.js'

t.test('HttpError', t => {
  t.plan(5)

  t.test('it should create a basic error', t => {
    t.plan(8)

    const error = new HttpError(404, 'WHATEVER', { key1: 'value1' })
    const otherError = new HttpError(570, 'WHATEVER', { key1: 'value1' })

    t.type(error, HttpError)
    t.type(error, Error)
    t.strictSame(error.message, 'WHATEVER')
    t.strictSame(error.key1, 'value1')
    t.strictSame(error.name, 'HttpError')
    t.strictSame(error.code, 'HTTP_ERROR_NOT_FOUND')

    t.type(otherError, HttpError)
    t.strictSame(otherError.code, 'HTTP_ERROR_570')
  })

  t.test('it should assign derived properties', t => {
    t.plan(20)

    const clientError = new HttpError(404, 'WHATEVER', { key1: 'value1', headers: { a: 'b' } })
    const serverError = new HttpError(502, 'WHATEVER', { key1: 'value1', headers: { c: 'd' } })
    const otherError = new HttpError(502, 'WHATEVER', { expose: true })

    t.strictSame(clientError.status, 404)
    t.strictSame(clientError.statusCode, 404)
    t.strictSame(clientError.error, 'Not Found')
    t.strictSame(clientError.errorPhrase, 'Not found.')
    t.ok(clientError.isClientError)
    t.notOk(clientError.isServerError)
    t.strictSame(clientError.statusClass, 400)
    t.ok(clientError.expose)
    t.same(clientError.headers, { a: 'b' })

    t.strictSame(serverError.status, 502)
    t.strictSame(serverError.statusCode, 502)
    t.strictSame(serverError.error, 'Bad Gateway')
    t.strictSame(serverError.errorPhrase, 'Bad gateway.')
    t.notOk(serverError.isClientError)
    t.ok(serverError.isServerError)
    t.strictSame(serverError.statusClass, 500)
    t.notOk(serverError.expose)
    t.same(serverError.headers, { c: 'd' })

    t.ok(otherError.expose)
    t.same(otherError.headers, {})
  })

  t.test('it should accept multiple invocations styles', t => {
    t.plan(4)

    const error = new HttpError('NotFound', { code: 'CODE', message: 'WHATEVER', key1: 'value1' })

    t.equal(error.status, 404)
    t.equal(error.code, 'CODE')
    t.equal(error.message, 'WHATEVER')
    t.equal(error.key1, 'value1')
  })

  t.test('it constrain number and expose to the expected format', t => {
    t.plan(4)

    t.equal(new HttpError(200).status, 500)
    t.equal(new HttpError(800).status, 500)
    t.equal(new HttpError('OTHER').status, 500)
    t.notOk(new HttpError(200, { expose: 'NO' }).expose)
  })

  t.test('.serialize should correctly serialize the error', t => {
    t.plan(3)

    const error = new HttpError(404, 'WHATEVER', { key1: 'value1' })
    error.stack = '1\n2'

    t.same(error.serialize(), {
      statusCode: 404,
      error: 'Not Found',
      message: 'WHATEVER'
    })

    t.same(error.serialize(true), {
      statusCode: 404,
      error: 'Not Found',
      message: 'WHATEVER',
      key1: 'value1',
      stack: ['2']
    })

    t.same(error.serialize(true, true), {
      statusCode: 404,
      error: 'Not Found',
      message: 'WHATEVER',
      key1: 'value1'
    })
  })
})

t.test('createError', t => {
  t.plan(1)

  t.test('it should create an error', t => {
    t.plan(7)

    const error = createError(404, 'WHATEVER', { key1: 'value1' })
    const otherError = createError(404, 'WHATEVER', 'IGNORED' as any)

    t.type(error, HttpError)
    t.type(error, Error)
    t.strictSame(error.message, 'WHATEVER')
    t.strictSame(error.key1, 'value1')

    t.type(otherError, HttpError)
    t.type(otherError, Error)
    t.strictSame(otherError.message, 'WHATEVER')
  })
})

t.test('isHttpError', t => {
  t.plan(1)

  t.test('it should correctly detect HTTP error duck typing', t => {
    t.plan(11)

    t.ok(isHttpError(createError(404, 'WHATEVER', { key1: 'value1' })))
    t.ok(isHttpError(createHttpError(404, 'WHATEVER', { key1: 'value1' })))
    t.ok(isHttpError(new createHttpError.NotFound('WHATEVER')))
    t.ok(isHttpError({ status: 404, statusCode: 404, expose: true }))

    t.notOk(isHttpError(null))
    t.notOk(isHttpError(undefined))
    t.notOk(isHttpError('MESSAGE'))
    t.notOk(isHttpError(123))
    t.notOk(isHttpError({}))
    t.notOk(isHttpError({ status: 404, statusCode: 405, expose: true }))
    t.notOk(isHttpError({ status: 404, statusCode: 404, expose: 'WHATEVER' }))
  })
})
