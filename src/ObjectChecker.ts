/**
 * ObjectChecker
 * @author Bichi Kim <bichi@live.co.kr>
 */
import {isArray, isFunction, isObject} from 'lodash'
import memberCheck from './memberCheck'
import {ITypeChecker, TypeChecker} from './TypeChecker'
export interface IObjectChecker extends ITypeChecker {
  // nothing
}
export class ObjectChecker extends TypeChecker implements IObjectChecker {

  constructor(
    schemas: {[key: string]: ITypeChecker},
  ) {
    super((data: any): boolean => {
      if(!memberCheck(data, schemas)){
        return false
      }
      return isObject(data) && !isFunction(data) && !isArray(data)
    })
  }
}
