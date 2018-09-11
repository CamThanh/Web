export interface IAuthority {
  uuid: string;
  name: string;
  authority: string;
}

export class Authority {
  private _uuid: string;
  private _name: string;
  private _authority: string;

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

  public get uuid(): string {
    return this._uuid;
  }
  public set uuid(value: string) {
    this._uuid = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get authority(): string {
    return this._authority;
  }
  public set authority(value: string) {
    this._authority = value;
  }
}