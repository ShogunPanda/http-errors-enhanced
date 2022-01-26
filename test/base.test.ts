/* eslint-disable @typescript-eslint/no-floating-promises */

import createHttpError from 'http-errors'
import t from 'tap'
import { createError, HttpError, isHttpError } from '../src'

t.test('HttpError', t => {
  t.plan(5)

  t.test('it should create a basic error', t => {
    t.plan(8)

    const error = new HttpError(404, 'WHATEVER', { key1: 'value1' })
    const otherError = new HttpError(570, 'WHATEVER', { key1: 'value1' })

    t.type(error, HttpError)
    t.type(error, Error)
    t.is(error.message, 'WHATEVER')
    t.is(error.key1, 'value1')
    t.is(error.name, 'HttpError')
    t.is(error.code, 'HTTP_ERROR_NOT_FOUND')

    t.type(otherError, HttpError)
    t.is(otherError.code, 'HTTP_ERROR_570')
  })

  t.test('it should assign derived properties', t => {
    t.plan(20)

    const clientError = new HttpError(404, 'WHATEVER', { key1: 'value1', headers: { a: 'b' } })
    const serverError = new HttpError(502, 'WHATEVER', { key1: 'value1', headers: { c: 'd' } })
    const otherError = new HttpError(502, 'WHATEVER', { expose: true })

    t.is(clientError.status, 404)
    t.is(clientError.statusCode, 404)
    t.is(clientError.error, 'Not Found')
    t.is(clientError.errorPhrase, 'Not found.')
    t.true(clientError.isClientError)
    t.false(clientError.isServerError)
    t.is(clientError.statusClass, 400)
    t.true(clientError.expose)
    t.same(clientError.headers, { a: 'b' })

    t.is(serverError.status, 502)
    t.is(serverError.statusCode, 502)
    t.is(serverError.error, 'Bad Gateway')
    t.is(serverError.errorPhrase, 'Bad gateway.')
    t.false(serverError.isClientError)
    t.true(serverError.isServerError)
    t.is(serverError.statusClass, 500)
    t.false(serverError.expose)
    t.same(serverError.headers, { c: 'd' })

    t.true(otherError.expose)
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
    t.false(new HttpError(200, { expose: 'NO' }).expose)
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
    t.is(error.message, 'WHATEVER')
    t.is(error.key1, 'value1')

    t.type(otherError, HttpError)
    t.type(otherError, Error)
    t.is(otherError.message, 'WHATEVER')
  })
})

t.test('isHttpError', t => {
  t.plan(1)

  t.test('it should correctly detect HTTP error duck typing', t => {
    t.plan(11)

    t.true(isHttpError(createError(404, 'WHATEVER', { key1: 'value1' })))
    t.true(isHttpError(createHttpError(404, 'WHATEVER', { key1: 'value1' })))
    t.true(isHttpError(new createHttpError.NotFound('WHATEVER')))
    t.true(isHttpError({ status: 404, statusCode: 404, expose: true }))

    t.false(isHttpError(null))
    t.false(isHttpError(undefined))
    t.false(isHttpError('MESSAGE'))
    t.false(isHttpError(123))
    t.false(isHttpError({}))
    t.false(isHttpError({ status: 404, statusCode: 405, expose: true }))
    t.false(isHttpError({ status: 404, statusCode: 404, expose: 'WHATEVER' }))
  })
})
