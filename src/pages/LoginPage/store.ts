import React from 'react';
import { makeAutoObservable } from 'mobx';

interface IData {
  login: string,
  password: string,
}

const initialData: IData = {
  login: '',
  password: '',
}

const initialError: IData = {
  login: '',
  password: '',
}

const NO_VALUE = 'Заполните поле';

export class LoginStore {
  private _data: IData = initialData;
  private _error: IData = initialError;
  private _isShowPassword = false;
  private _isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  get userData() {
    return {
      email: this.login,
      password: this.password,
    };
  }

  get login() {
    return this._data.login;
  }

  get password() {
    return this._data.password;
  }

  get loginError() {
    return this._error.login;
  }

  get passwordError() {
    return this._error.password;
  }

  get isShowPassword() {
    return this._isShowPassword;
  }

  get isLoading() {
    return this._isLoading;
  }

  clearError() {
    this._error = initialError;
  }

  validate() {
    let isValid = true;
    if (this.login.length === 0) {
      this.setLoginError(NO_VALUE);
      isValid = false;
    }
    if (this.password.length === 0) {
      this.setPasswordError(NO_VALUE);
      isValid = false;
    }

    return isValid;
  }

  changeLogin = (value: string): void => {
    this._data.login = value.trim();
    this.clearError();
  }

  changePassword = (value: string): void => {
    this._data.password = value.trim();
    this.clearError();
  }

  setLoginError = (value: string): void => {
    this._error.login = value;
  }

  setPasswordError = (value: string): void => {
    this._error.password = value;
  }

  switchShowingPassword = (): void => {
    this._isShowPassword = !this._isShowPassword;
  }

  startLoading = () => {
    this._isLoading = true;
  }

  stopLoading = () => {
    this._isLoading = false;
  }

  submitForm = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    if (!this.validate()) {
      return;
    }
    this.startLoading();
  }
}

