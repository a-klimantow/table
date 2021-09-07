import { makeAutoObservable } from 'mobx';

export class GlobalStore {
  private _returnUrl = '';
  constructor() {
    makeAutoObservable(this);
  }

  get returnUrl () {
    return this._returnUrl;
  }

  setReturnUrl (url: string) {
    this._returnUrl = url;
  }
}