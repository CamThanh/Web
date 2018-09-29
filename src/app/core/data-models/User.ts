import { IUserDetail, UserDetail } from "./UserDetail";
import { IAuthority, Authority } from "./Authority";
import { Link, ILink } from "./Links";
import { DateModel } from "./DateModel";

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
  links: ILink[];
  dateModel: DateModel;
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
  links: Link[];
  dateModel: DateModel;

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
      for (let link of user.links) {
        this.links.push(new Link(link));
      }
      this.dateModel = new DateModel(user.dateModel);
    } else {
      this.uuid = "";
      this.username = "";
      this.password = "";
      this.accountExpired = false;
      this.accountLocked = false;
      this.credentialsExpired = false;
      this.enabled = true;
      this.accountNonExpired = false;
      this.accountNonLocked = false;
      this.credentialsNonExpired = false;
      this.userDetail = new UserDetail();
      this.authorities = new Array<Authority>();
      this.links = new Array<Link>();
      this.dateModel = new DateModel();
    }
  }
}