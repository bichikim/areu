/**
 * ArrayChecker
 * @author Bichi Kim <bichi@live.co.kr>
 */
import isArray from 'lodash/isArray'
import memberCheck from './memberCheck'
import {ITypeChecker, TypeChecker} from './TypeChecker'
export interface IArrayChecker extends ITypeChecker {
  length(num: number): IArrayChecker
  max(num: number): IArrayChecker
  min(num: number): IArrayChecker
}
export class ArrayChecker extends TypeChecker implements IArrayChecker {
  constructor(schemas: ITypeChecker[]) {
    super((data: any) => {
      if(!memberCheck(data, schemas)){
        return false
      }
      return isArray(data)
    })
  }

  length(num: number): IArrayChecker {
    this._register((data: any) => {
      return data.length === num
    })
    return this
  }
  max(num: number): IArrayChecker {
    this._register((data: any) => {
      return data.length <= num
    })
    return this
  }
  min(num: number): IArrayChecker {
    this._register((data: any) => {
      return data.label >= num
    })
    return this
  }
}
