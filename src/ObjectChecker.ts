/**
 *
 * @author Bichi Kim <bichi@pjfactory.com>
 * @copyright PJ Factory Co.
 * @license Private
 */
import forEach from 'lodash/forEach'
import isArray from 'lodash/isArray'
import isFunction from 'lodash/isFunction'
import isNil from 'lodash/isNil'
import isObject from 'lodash/isObject'
import {ITypeChecker} from './TypeChecker'
export class ObjectChecker implements ITypeChecker {
  private _required: boolean
  private _schemas: {[key: string]: ITypeChecker}
  constructor(schemas: {[key: string]: ITypeChecker}) {
    this._required = false
    this._schemas = schemas
  }
  check(data: any): boolean {
    if(isNil(data)){
      return !this._required
    }
    if(!isObject(data) || isFunction(data) || isArray(data)){
      return false
    }
    let checkingFlag: boolean = true
    forEach(this._schemas, (typeChecker, key) => {
      if(!typeChecker.check(data[key])){
        checkingFlag = false
        return false
      }
    })
    return checkingFlag
  }

  required(): ITypeChecker {
    this._required = true
    return this
  }
}
