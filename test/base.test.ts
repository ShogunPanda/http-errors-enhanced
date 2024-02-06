/* eslint-disable @typescript-eslint/no-floating-promises */

import createHttpError from 'http-errors'
import { deepStrictEqual, ok } from 'node:assert'
import { test } from 'node:test'
import { HttpError, createError, isHttpError } from '../src/index.js'

test('HttpError', async () => {
  await test('it should create a basic error', () => {
    const error = new HttpError(404, 'WHATEVER', { key1: 'value1' })
    const otherError = new HttpError(570, 'WHATEVER', { key1: 'value1' })

    ok(error instanceof HttpError)
    ok(error instanceof Error)
    deepStrictEqual(error.message, 'WHATEVER')
    deepStrictEqual(error.key1, 'value1')
    deepStrictEqual(error.name, 'HttpError')
    deepStrictEqual(error.code, 'HTTP_ERROR_NOT_FOUND')

    ok(otherError instanceof HttpError)
    deepStrictEqual(otherError.code, 'HTTP_ERROR_570')
  })

  await test('it should assign derived properties', () => {
    const clientError = new HttpError(404, 'WHATEVER', { key1: 'value1', headers: { a: 'b' } })
    const serverError = new HttpError(502, 'WHATEVER', { key1: 'value1', headers: { c: 'd' } })
    const otherError = new HttpError(502, 'WHATEVER', { expose: true })

    deepStrictEqual(clientError.status, 404)
    deepStrictEqual(clientError.statusCode, 404)
    deepStrictEqual(clientError.error, 'Not Found')
    deepStrictEqual(clientError.errorPhrase, 'Not found.')
    ok(clientError.isClientError)
    ok(!clientError.isServerError)
    deepStrictEqual(clientError.statusClass, 400)
    ok(clientError.expose)
    deepStrictEqual(clientError.headers, { a: 'b' })

    deepStrictEqual(serverError.status, 502)
    deepStrictEqual(serverError.statusCode, 502)
    deepStrictEqual(serverError.error, 'Bad Gateway')
    deepStrictEqual(serverError.errorPhrase, 'Bad gateway.')
    ok(!serverError.isClientError)
    ok(serverError.isServerError)
    deepStrictEqual(serverError.statusClass, 500)
    ok(!serverError.expose)
    deepStrictEqual(serverError.headers, { c: 'd' })

    ok(otherError.expose)
    deepStrictEqual(otherError.headers, {})
  })

  await test('it should accept multiple invocations styles', () => {
    const error = new HttpError('NotFound', { code: 'CODE', message: 'WHATEVER', key1: 'value1' })

    deepStrictEqual(error.status, 404)
    deepStrictEqual(error.code, 'CODE')
    deepStrictEqual(error.message, 'WHATEVER')
    deepStrictEqual(error.key1, 'value1')
  })

  await test('it constrain number and expose to the expected format', () => {
    deepStrictEqual(new HttpError(200).status, 500)
    deepStrictEqual(new HttpError(800).status, 500)
    deepStrictEqual(new HttpError('OTHER').status, 500)
    ok(!new HttpError(200, { expose: 'NO' }).expose)
  })

  await test('.serialize should correctly serialize the error', () => {
    const error = new HttpError(404, 'WHATEVER', { key1: 'value1' })
    error.stack = '1\n2'

    deepStrictEqual(error.serialize(), {
      statusCode: 404,
      error: 'Not Found',
      message: 'WHATEVER'
    })

    deepStrictEqual(error.serialize(true), {
      statusCode: 404,
      error: 'Not Found',
      message: 'WHATEVER',
      key1: 'value1',
      stack: ['2']
    })

    deepStrictEqual(error.serialize(true, true), {
      statusCode: 404,
      error: 'Not Found',
      message: 'WHATEVER',
      key1: 'value1'
    })
  })
})

test('createError', async () => {
  await test('it should create an error', () => {
    const error = createError(404, 'WHATEVER', { key1: 'value1' })
    const otherError = createError(404, 'WHATEVER', { key: 'ignored' })

    ok(error instanceof HttpError)
    ok(error instanceof Error)
    deepStrictEqual(error.message, 'WHATEVER')
    deepStrictEqual(error.key1, 'value1')

    ok(otherError instanceof HttpError)
    ok(otherError instanceof Error)
    deepStrictEqual(otherError.message, 'WHATEVER')
  })
})

test('isHttpError', async () => {
  await test('it should correctly detect HTTP error duck typing', () => {
    ok(isHttpError(createError(404, 'WHATEVER', { key1: 'value1' })))
    ok(isHttpError(createHttpError(404, 'WHATEVER', { key1: 'value1' })))
    ok(isHttpError(new createHttpError.NotFound('WHATEVER')))
    ok(isHttpError({ status: 404, statusCode: 404, expose: true }))

    ok(!isHttpError(null))
    ok(!isHttpError(undefined))
    ok(!isHttpError('MESSAGE'))
    ok(!isHttpError(123))
    ok(!isHttpError({}))
    ok(!isHttpError({ status: 404, statusCode: 405, expose: true }))
    ok(!isHttpError({ status: 404, statusCode: 404, expose: 'WHATEVER' }))
  })
})
