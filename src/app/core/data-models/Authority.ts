export interface IAuthority {
  uuid: string;
  name: string;
  authority: string;
}

export class Authority {
  uuid: string;
  name: string;
  authority: string;

  constructor(authority?: IAuthority) {
    if (authority) {
      this.uuid = authority.uuid;
      this.name = authority.name;
      this.authority = authority.authority;
    } else {
      this.uuid = "";
      this.name = "";
      this.authority = "";
    }
  }
}