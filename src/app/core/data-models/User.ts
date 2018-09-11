import { IUserDetail, UserDetail } from "./UserDetail";
import { IAuthority, Authority } from "./Authority";

export interface IUser {
  uuid: string;
  username: string;
  password: string;
  accountExpired: boolean;
  accountLocked: boolean;
  credentialsExpired: boolean;
  enabled: boolean;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  userDetail: IUserDetail;
  authorities: IAuthority[];
}

export class User {
  private _uuid: string;
  private _username: string;
  private _password: string;
  private _accountExpired: boolean;
  private _accountLocked: boolean;
  private _credentialsExpired: boolean;
  private _enabled: boolean;
  private _accountNonExpired: boolean;
  private _accountNonLocked: boolean;
  private _credentialsNonExpired: boolean;
  private _userDetail: UserDetail;
  private _authorities: Authority[];

  constructor(user?: IUser) {
    if (user) {
      this.uuid = user.uuid;
      this.username = user.username;
      this.password = user.password;
      this.accountExpired = user.accountExpired;
      this.accountLocked = user.accountLocked;
      this.credentialsExpired = user.credentialsExpired;
      this.enabled = user.enabled;
      this.accountNonExpired = user.accountNonExpired;
      this.accountNonLocked = user.accountNonLocked;
      this.credentialsNonExpired = user.credentialsNonExpired;
      this.userDetail = new UserDetail(user.userDetail);
      for (let authority of user.authorities) {
        this.authorities.push(new Authority(authority));
      }
    } else {
      this.uuid = "";
      this.username = "";
      this.password = "";
      this.accountExpired = false;
      this.accountLocked = false;
      this.credentialsExpired = false;
      this.enabled = false;
      this.accountNonExpired = false;
      this.accountNonLocked = false;
      this.credentialsNonExpired = false;
      this.userDetail = new UserDetail();
      this.authorities = new Array<Authority>();
    }
  }

  public get uuid(): string {
    return this._uuid;
  }
  public set uuid(value: string) {
    this._uuid = value;
  }

  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }

  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

  public get accountExpired(): boolean {
    return this._accountExpired;
  }
  public set accountExpired(value: boolean) {
    this._accountExpired = value;
  }

  public get accountLocked(): boolean {
    return this._accountLocked;
  }
  public set accountLocked(value: boolean) {
    this._accountLocked = value;
  }

  public get credentialsExpired(): boolean {
    return this._credentialsExpired;
  }
  public set credentialsExpired(value: boolean) {
    this._credentialsExpired = value;
  }

  public get enabled(): boolean {
    return this._enabled;
  }
  public set enabled(value: boolean) {
    this._enabled = value;
  }

  public get accountNonExpired(): boolean {
    return this._accountNonExpired;
  }
  public set accountNonExpired(value: boolean) {
    this._accountNonExpired = value;
  }

  public get accountNonLocked(): boolean {
    return this._accountNonLocked;
  }
  public set accountNonLocked(value: boolean) {
    this._accountNonLocked = value;
  }

  public get credentialsNonExpired(): boolean {
    return this._credentialsNonExpired;
  }
  public set credentialsNonExpired(value: boolean) {
    this._credentialsNonExpired = value;
  }

  public get userDetail(): UserDetail {
    return this._userDetail;
  }
  public set userDetail(value: UserDetail) {
    this._userDetail = value;
  }

  public get authorities(): Authority[] {
    return this._authorities;
  }
  public set authorities(value: Authority[]) {
    this._authorities = value;
  }
}