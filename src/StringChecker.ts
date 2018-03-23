/**
 * StringChecker
 * @author Bichi Kim <bichi@live.co.kr>
 */
import isString from 'lodash/isString'
import {ITypeChecker, TypeChecker} from './TypeChecker'
const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
const uuidReg = /^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$/
export interface IStringChecker extends ITypeChecker {
  uuid(): IStringChecker
  email(): IStringChecker
  test(reg: any): IStringChecker
}

export class StringChecker extends TypeChecker implements IStringChecker {

  constructor() {
    super((data: any) => {
      return isString(data)
    })
  }

  test(reg: RegExp): IStringChecker {
    if(!reg || !reg.test){
      throw new Error('[are-u test] test reg is not Regular expression')
    }
    this._register((data: any) => {
      return reg.test(data)
    })
    return this
  }

  uuid(): IStringChecker {
    this._register((data: any) => {
      return uuidReg.test(data)
    })
    return this
  }

  email(): IStringChecker {
    this._register((data: any) => {
      return emailReg.test(data)
    })
    return this
  }
}
