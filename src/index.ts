/**
 * Are U?
 * @author Bichi Kim <bichi@live.co.kr>
 */
import isBoolean from 'lodash/isBoolean'
import {ArrayChecker, IArrayChecker} from './ArrayChecker'
import {INumberChecker, NumberChecker} from './NumberChecker'
import {IObjectChecker, ObjectChecker} from './ObjectChecker'
import {IStringChecker, StringChecker} from './StringChecker'
import {ITypeChecker, TypeChecker} from './TypeChecker'

export type TObjectCheckerFactory = (schemas: {[key: string]: ITypeChecker}) => IObjectChecker
export type TArrayCheckerFactory = (schemas: ITypeChecker[]) => IArrayChecker
export type TTypeStringCheckerFactory = () => IStringChecker
export type TNumberCheckerFactory = () => INumberChecker
export type TTypeCheckerFactory = () => ITypeChecker
export type TValidate = (data: any, schema: ITypeChecker) => boolean
export {
  IArrayChecker, ArrayChecker,
  IObjectChecker, ObjectChecker,
  IStringChecker, StringChecker,
  ITypeChecker, TypeChecker,
  INumberChecker, NumberChecker,
}

export const object: TObjectCheckerFactory = (
  schemas: {[key: string]: ITypeChecker},
): IObjectChecker => {
  return new ObjectChecker(schemas)
}

export const array: TArrayCheckerFactory = (
  schemas: ITypeChecker[],
): IArrayChecker => {
  return new ArrayChecker(schemas)
}

export const string: TTypeStringCheckerFactory = (): IStringChecker => {
  return new StringChecker()
}

export const number: TNumberCheckerFactory = (): INumberChecker => {
  return new NumberChecker()
}

export const boolean: TTypeCheckerFactory = (): ITypeChecker => {
  return new TypeChecker((data: any) => isBoolean(data))
}

export const any: TTypeCheckerFactory = (): ITypeChecker => {
  return new TypeChecker(() => true)
}

export const validate: TValidate = (data: any, schema: ITypeChecker): boolean => {
  return schema.check(data)
}

export const continuously: string = '...'
