/* eslint-disable max-nested-callbacks */
/**
 * Spec for Are U?
 * @author Bichi Kim <bichi@live.co.kr>
 */
import {expect} from 'chai'
import {
  any,
  array,
  boolean,
  number,
  object,
  string,
  validate,
  continuously,
} from './index'
describe('are-u', () => {
  let schema
  let data
  describe('string', () => {
    it('can validate', () => {
      schema = string()
      expect(validate(null, schema)).to.equal(true)
      expect(validate('this is string', schema)).to.equal(true)
      expect(validate(2, schema)).to.equal(false)
      expect(validate(() => 1, schema)).to.equal(false)
      expect(validate([], schema)).to.equal(false)
      expect(validate({}, schema)).to.equal(false)
      expect(validate(true, schema)).to.equal(false)
    })
    it('can validate with required', () => {
      schema = string().required()
      expect(validate(null, schema)).to.equal(false)
    })
    it('can validate with test', () => {
      schema = string().test(/\.js$/)
      expect(validate('test.js', schema)).to.equal(true)
      expect(validate('j-test.s', schema)).to.equal(false)
    })
    it('can validate with email', () => {
      schema = string().email()
      expect(validate('test@test.net', schema)).to.equal(true)
      expect(validate('test-test@net', schema)).to.equal(false)
    })
    it('can validate with uuid', () => {
      schema = string().uuid()
      expect(validate('02BECFE0-4736-11E7-BE0C-B10A93E9DE77', schema)).to.equal(true)
      expect(validate('02BECFE0-4736-11E7-B-0C-B10A93E9DE77', schema)).to.equal(false)
    })
  })
  describe('number', () => {
    it('can validate', () => {
      schema = number()
      expect(validate('this is string', schema)).to.equal(false)
      expect(validate(2, schema)).to.equal(true)
      expect(validate(() => 1, schema)).to.equal(false)
      expect(validate([], schema)).to.equal(false)
      expect(validate({}, schema)).to.equal(false)
      expect(validate(true, schema)).to.equal(false)
      expect(validate(null, schema)).to.equal(true)
    })
    it('can validate with required', () => {
      schema = number().required()
      expect(validate(null, schema)).to.equal(false)
    })
    it('can validate with integer', () => {
      schema = number().integer()
      expect(validate(Number.MIN_VALUE, schema)).to.equal(false)
      expect(validate(Number.MAX_VALUE, schema)).to.equal(false)
    })
    it('can validate with integerSafe', () => {
      schema = number().integerSafe()
      expect(validate(Number.MIN_SAFE_INTEGER, schema)).to.equal(false)
      expect(validate(Number.MAX_SAFE_INTEGER, schema)).to.equal(false)
    })
    it('can validate with min', () => {
      const min = -5
      schema = number().min(min)
      expect(validate(min, schema)).to.equal(false)
      expect(validate(0, schema)).to.equal(true)
    })
    it('can validate with min', () => {
      const max = 5
      schema = number().min(max)
      expect(validate(max, schema)).to.equal(false)
      expect(validate(max + 1, schema)).to.equal(true)
    })
  })
  describe('boolean', () => {
    it('can validate type', () => {
      schema = boolean()
      expect(validate('this is string', schema)).to.equal(false)
      expect(validate(2, schema)).to.equal(false)
      expect(validate(() => 1, schema)).to.equal(false)
      expect(validate([], schema)).to.equal(false)
      expect(validate({}, schema)).to.equal(false)
      expect(validate(true, schema)).to.equal(true)
      expect(validate(null, schema)).to.equal(true)
    })
    it('can validate type and required', () => {
      schema = boolean().required()
      expect(validate(null, schema)).to.equal(false)
    })
  })
  describe('any', () => {
    it('can validate', () => {
      schema = any()
      expect(validate('this is string', schema)).to.equal(true)
      expect(validate(2, schema)).to.equal(true)
      expect(validate(() => 1, schema)).to.equal(true)
      expect(validate([], schema)).to.equal(true)
      expect(validate({}, schema)).to.equal(true)
      expect(validate(true, schema)).to.equal(true)
      expect(validate(null, schema)).to.equal(true)
    })
    it('can validate with required', () => {
      schema = boolean().required()
      expect(validate(null, schema)).to.equal(false)
    })
  })
  describe('object', () => {
    it('can validate', () => {
      schema = object({})
      expect(validate('this is string', schema)).to.equal(false)
      expect(validate(2, schema)).to.equal(false)
      expect(validate(() => 1, schema)).to.equal(false)
      expect(validate([], schema)).to.equal(false)
      expect(validate({}, schema)).to.equal(true)
      expect(validate(true, schema)).to.equal(false)
      expect(validate(null, schema)).to.equal(true)
    })
    it('can validate members', () => {
      data = {age: 900, isMale: true, name: 'bichi'}
      schema = object({age: number(), isMale: boolean(), name: string()})
      expect(validate(data, schema)).to.equal(true)
      data = {age: 900, isMale: 'true', name: 'bichi'}
      expect(validate(data, schema)).to.equal(false)
    })
    it('can validate deep', () => {
      schema = object({items: object({ball: boolean(), map: string()}), name: string()})
      data =  {items: {ball: true, map: 'would map'}, name: 'bichi'}
      expect(validate(data, schema)).to.equal(true)
      data =  {items: {ball: true, map: false}, name: 'bichi'}
      expect(validate(data, schema)).to.equal(false)
    })
  })
  describe('array', () => {
    it('can validate array', () => {
      schema = array([])
      expect(validate('this is string', schema)).to.equal(false)
      expect(validate(2, schema)).to.equal(false)
      expect(validate(() => 1, schema)).to.equal(false)
      expect(validate([], schema)).to.equal(true)
      expect(validate({}, schema)).to.equal(false)
      expect(validate(true, schema)).to.equal(false)
      expect(validate(null, schema)).to.equal(true)
    })
    it('can validate with required', () => {
      schema = array([]).required()
      expect(validate([], schema)).to.equal(true)
      expect(validate(null, schema)).to.equal(false)
    })
    it('can validate member', () => {
      schema = array([string(), continuously])
      data = ['the', 'super', 'easy', 'and', 'fast', 'validation']
      expect(validate(data, schema)).to.equal(true)
      data = ['the', 'super', 'easy', 'and', 'fast', 2]
      expect(validate(data, schema)).to.equal(false)
      schema = array([string(), continuously, null, null, null, number()])
      data = ['the', 'super', 'easy', 'and', 'fast', 2]
      expect(validate(data, schema)).to.equal(true)
      data = ['the', 'super', 'easy', 2, 'fast', 2]
      expect(validate(data, schema)).to.equal(false)
      data = ['the', 'super', 'easy', 'and', 'fast', 2, 'anything', null]
      expect(validate(data, schema)).to.equal(true)
    })
    it('can validate member for mixed types', () => {
      schema = array([string(), number(), any().required()])
      data = ['the', 'super', 'easy', 'and', 'fast', 'validation']
      expect(validate(data, schema)).to.equal(false)
      data = ['the', 2, false, 'super', 'easy', 'and', 'fast', 'validation']
      expect(validate(data, schema)).to.equal(true)
    })
    it('can validate deep', () => {
      schema = array([
        object({age: number().required(), name: string().required()}),
        boolean().required(),
      ])
      data = [{age: 9999, name: 'bichi'}, true]
      expect(validate(data, schema)).to.equal(true)
      data = [{age: 9999, name: 'bichi'}]
      expect(validate(data, schema)).to.equal(false)
      data = [{age: 'unknown', name: 'bichi'}]
      expect(validate(data, schema)).to.equal(false)
    })
    it('can validate with length', () => {
      const length = 6
      schema = array([string(), continuously]).length(length)
      data = ['the', 'super', 'easy', 'and', 'fast', 'validation']
      expect(validate(data, schema)).to.equal(true)
      data = ['the', 2, false, 'super', 'easy', 'and', 'fast', 'validation']
      expect(validate(data, schema)).to.equal(false)
      data = ['the', 'super', 'easy', 'and', 'fast']
      expect(validate(data, schema)).to.equal(false)
    })
    it('can validate with min and max', () => {
      const min = 3, max = 6
      schema = array([string(), continuously]).min(min).max(max)
      data = ['the', 'super', 'easy', 'and', 'fast']
      expect(validate(data, schema)).to.equal(true)
      data = ['the', 2, false, 'super', 'easy', 'and']
      expect(validate(data, schema)).to.equal(false)
      data = ['the', 'super', 'easy', 'and', 'fast', 'validation', 'really']
      expect(validate(data, schema)).to.equal(false)
      data = ['the', 'super']
      expect(validate(data, schema)).to.equal(false)
    })
  })
})
