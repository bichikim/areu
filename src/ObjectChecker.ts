/**
 * ObjectChecker
 * @author Bichi Kim <bichi@live.co.kr>
 */
import isArray from 'lodash/isArray'
import isFunction from 'lodash/isFunction'
import isObject from 'lodash/isObject'
import memberCheck from './memberCheck'
import {ITypeChecker, TypeChecker} from './TypeChecker'
export interface IObjectChecker extends ITypeChecker {
  // nothing
}
export class ObjectChecker extends TypeChecker implements IObjectChecker {

  constructor(
    schemas: {[key: string]: ITypeChecker} | ITypeChecker[],
  ) {
    super((data: any): boolean => {
      if(!memberCheck(data, schemas)){
        return false
      }
      return isObject(data) && !isFunction(data) && !isArray(data)
    })
  }
}
