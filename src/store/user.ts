import { makeAutoObservable } from 'mobx';
import { IUser } from '../types/common';

type UserType = IUser | null;

export class UserStore {
  private _data: UserType = null;
  constructor() {
    makeAutoObservable(this);
  }

  get data(): UserType {
    return this._data;
  }

  get token() {
    return this._data?.token;
  }

  setUser(data: IUser) {
    this._data = data;
  }

  // TODO: реализовать логику проверки доступа
  checkPermission (page: any): boolean {
    return false;
  }
}