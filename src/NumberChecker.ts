import isNumber from 'lodash/isNumber'
import {ITypeChecker, TypeChecker} from './TypeChecker'

export interface INumberChecker extends ITypeChecker {
  integer(): INumberChecker
  integerSafe(): INumberChecker
  max(num: number): INumberChecker
  min(num: number): INumberChecker
}

export class NumberChecker extends TypeChecker implements INumberChecker {
  constructor() {
    super((data: any) => (isNumber(data)))
  }
  integer(): INumberChecker {
    this._register((data: any) => {
      return data < Number.MAX_VALUE &&
        data > Number.MIN_VALUE
    })
    return this
  }
  integerSafe(): INumberChecker {
    this._register((data: any) => {
      return data < Number.MAX_SAFE_INTEGER &&
        data > Number.MIN_SAFE_INTEGER
    })
    return this
  }
  max(num: number): INumberChecker {
    this._register((data: any) => {
      return data < num
    })
    return this
  }
  min(num: number): INumberChecker {
    this._register((data: any) => {
      return data > num
    })
    return this
  }
}
