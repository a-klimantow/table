import { makeAutoObservable } from 'mobx';
import { IUser } from '../types/common';


export class UserStore {
  private _data: IUser | null = null;
  constructor(data: IUser) {
    makeAutoObservable(this);
    this._data = data;
  }
}