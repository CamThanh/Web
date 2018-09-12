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
  userDetail: UserDetail;
  authorities: Authority[];

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
}