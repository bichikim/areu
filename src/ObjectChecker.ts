/**
 * ObjectChecker
 * @author Bichi Kim <bichi@live.co.kr>
 */
import forEach from 'lodash/forEach'
import isFunction from 'lodash/isFunction'
import isObject from 'lodash/isObject'
import {ITypeChecker, TypeChecker} from './TypeChecker'
export interface IObjectChecker extends ITypeChecker {
  // nothing
}
export class ObjectChecker extends TypeChecker implements IObjectChecker {
  constructor(
    schemas: {[key: string]: ITypeChecker} | ITypeChecker[],
  ) {
    super((data: any): boolean => {
      let isOk: boolean = true
      forEach(schemas, (schema: any) => {
        if(isObject(schema) && isFunction(schema.check)){
          if(!schema.check(data)){
            isOk = false
            return false
          }
        }else{
          throw new Error('[Object checker] one schema is not typeChecker or checker')
        }
      })
      if(!isOk){
        return false
      }
      return isObject(data)
    })
  }
}
