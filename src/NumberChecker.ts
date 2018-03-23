import {isInteger} from 'lodash'
import isNumber from 'lodash/isNumber'
import {ITypeChecker, TypeChecker} from './TypeChecker'

export interface INumberChecker extends ITypeChecker {
  integer(): INumberChecker
}

export class NumberChecker extends TypeChecker implements INumberChecker {
  constructor() {
    super((data: any) => (isNumber(data)))
  }
  integer(): INumberChecker {
    this._register((data: any) => {
      return isInteger(data)
    })
    return this
  }
  max(num: number): INumberChecker {
    this._register((data: any) => {
      return data <= num
    })
    return this
  }
  min(num: number): INumberChecker {
    this._register((data: any) => {
      return data >= num
    })
    return this
  }
}
