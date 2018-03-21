/**
 * ArrayChecker
 * @author Bichi Kim <bichi@live.co.kr>
 */
import forEach from 'lodash/forEach'
import isArray from 'lodash/isArray'
import isNil from 'lodash/isNil'
import {ITypeChecker} from './TypeChecker'
export class ArrayChecker implements ITypeChecker {
  private _required: boolean
  private _schemas: ITypeChecker[]
  constructor(schemas: ITypeChecker[]) {
    this._required = false
    this._schemas = schemas
  }
  check(data: any): boolean {
    if(isNil(data)){
      return !this._required
    }
    if(!isArray(data)){
      return false
    }
    let checkingFlag: boolean = true
    // if it has only 1 schemas it means all members are using same schema
    if(this._schemas.length === 1){
      const typeChecker = this._schemas[0]
      forEach(data, (aData) => {
        if(!typeChecker.check(aData)){
          checkingFlag = false
          return false
        }
      })
    }else{
      forEach(this._schemas, (typeChecker, key) => {
        if(!typeChecker.check(data[key])){
          checkingFlag = false
          return false
        }
      })
    }
    return checkingFlag
  }
  required(): ITypeChecker {
    this._required = true
    return this
  }
}
