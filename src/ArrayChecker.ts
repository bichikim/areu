/**
 * ArrayChecker
 * @author Bichi Kim <bichi@live.co.kr>
 */
import {ObjectChecker} from './ObjectChecker'
import {ITypeChecker} from './TypeChecker'
export interface IArrayChecker extends ITypeChecker {
  length(num: number): IArrayChecker
}
export class ArrayChecker extends ObjectChecker implements IArrayChecker {
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
