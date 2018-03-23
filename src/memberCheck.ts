import forEach from 'lodash/forEach'
import isFunction from 'lodash/isFunction'
import isObject from 'lodash/isObject'
import {ITypeChecker} from './TypeChecker'

export default (
  data: any,
  schemas: {[key: string]: ITypeChecker} | ITypeChecker[],
): boolean => {
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
  return isOk
}
