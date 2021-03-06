/**
 * TypeChecker
 * @author Bichi Kim <bichi@live.co.kr>
 */
import {forEach, isNil} from 'lodash'
export interface ITypeChecker {
  check: TChecker
  required(): ITypeChecker
}

export type TChecker = (data: any) => boolean

export class TypeChecker implements ITypeChecker {
  protected _required: boolean = false
  private _checkers: TChecker[] = []
  private readonly _typeChecker: TChecker
  constructor(validator: TChecker) {
    this._typeChecker = validator
  }

  check(data: any): boolean {
    if(isNil(data) && !this._required){
      return true
    }
    let isOk: boolean = true
    forEach(this._checkers, (checker: TChecker) => {
      if(!checker(data)){
        isOk = false
        return false
      }
    })
    if(!isOk){
      return false
    }
    return this._typeChecker(data)
  }

  required(): ITypeChecker {
    this._required = true
    return this
  }

  protected _register(checker: TChecker): void {
    this._checkers.push(checker)
  }
}
