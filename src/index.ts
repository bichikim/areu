/**
 * Are U?
 * @author Bichi Kim <bichi@live.co.kr>
 */
import isBoolean from 'lodash/isBoolean'
import isInteger from 'lodash/isInteger'
import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import {ArrayChecker} from './ArrayChecker'
import {ObjectChecker} from './ObjectChecker'
import {IStringChecker, StringChecker} from './StringChecker'
import {ITypeChecker, TypeChecker} from './TypeChecker'
export type TObjectCheckerFactory = (schemas: {[key: string]: ITypeChecker}) => ITypeChecker
export type TOArrayCheckerFactory = (schemas: ITypeChecker[]) => ITypeChecker
export type TTypeCheckerFactory = () => ITypeChecker
export type TTypeStringFactory = () => IStringChecker
export type TValidate = (data: any, schema: ITypeChecker) => boolean
export {
  ArrayChecker, ObjectChecker, IStringChecker, StringChecker, ITypeChecker, TypeChecker,
}

export const object: TObjectCheckerFactory = (schemas: {[key: string]: ITypeChecker}) => {
  return new ObjectChecker(schemas)
}

export const array: TOArrayCheckerFactory = (schemas: ITypeChecker[]) => {
  return new ArrayChecker(schemas)
}

export const string: TTypeStringFactory = () => {
  return new StringChecker((data: any) => isString(data))
}

export const number: TTypeCheckerFactory = () => {
  return new TypeChecker((data: any) => isNumber(data))
}

export const integer: TTypeCheckerFactory = () => {
  return new TypeChecker((data: any) => isInteger(data))
}

export const boolean: TTypeCheckerFactory = () => {
  return new TypeChecker((data: any) => isBoolean(data))
}

export const any: TTypeCheckerFactory = () => {
  return new TypeChecker(() => true)
}

export const validate: TValidate = (data: any, schema: ITypeChecker) => {
  return schema.check(data)
}
