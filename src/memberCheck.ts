import difference from 'lodash/difference'
import forEach from 'lodash/forEach'
import isFunction from 'lodash/isFunction'
import isNil from 'lodash/isNil'
import isObject from 'lodash/isObject'
import {continuously} from './'
import {ITypeChecker} from './TypeChecker'

export default (
  data: any,
  schemas: {[key: string]: ITypeChecker} | ITypeChecker[],
): boolean => {
  if(!isObject(data) && !isNil(data)){
    return false
  }
  let isOk: boolean = true
  let previousSchema
  let continueMode = false
  const allSchemasKeys = Object.keys(schemas)
  const doneSchemasKeys = []
  forEach(data, (item: any, key) => {
    doneSchemasKeys.push(key.toString())
    let currentSchema = schemas[key]
    if(isObject(currentSchema) && isFunction(currentSchema.check)){
      continueMode = false
      previousSchema = currentSchema
    }else if(continueMode && previousSchema){
      currentSchema = previousSchema
    }else if(currentSchema === continuously){
      currentSchema = previousSchema
      continueMode = true
    }else{
      return true
    }
    if(!currentSchema.check(item)){
      isOk = false
      return false
    }
  })
  if(!isOk){
    return false
  }
  const leftSchemasKeys = difference(allSchemasKeys, doneSchemasKeys)
  forEach(leftSchemasKeys, (key) => {
    const currentSchema = schemas[key]
    if(isObject(currentSchema) && isFunction(currentSchema.check)){
      if(!currentSchema.check(data[key])){
        isOk = false
        return false
      }
    }else{
      throw new Error('[Object checker] one schema is not typeChecker')
    }
  })
  return isOk
}
