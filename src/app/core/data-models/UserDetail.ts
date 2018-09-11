export interface IUserDetail {
  uuid: string;
  email: string;
  firstname: string;
  lastname: string;
  gentle: string;
  age: number;
  phone: string;
  avatarUri: string;
}

export class UserDetail {
  private _uuid: string;
  private _email: string;
  private _firstname: string;
  private _lastname: string;
  private _gentle: string;
  private _age: number;
  private _phone: string;
  private _avatarUri: string;

  constructor(userDetail?: IUserDetail) {
    if (userDetail) {
      this.uuid = userDetail.uuid;
      this.email = userDetail.email;
      this.firstname = userDetail.firstname;
      this.lastname = userDetail.lastname;
      this.gentle = userDetail.gentle;
      this.age = userDetail.age;
      this.phone = userDetail.phone;
      this.avatarUri = userDetail.avatarUri;
    } else {
      this.uuid = "";
      this.email = "";
      this.firstname = "";
      this.lastname = "";
      this.gentle = "";
      this.age = -1;
      this.phone = "";
      this.avatarUri = "";
    }
  }

  public get uuid(): string {
    return this._uuid;
  }
  public set uuid(value: string) {
    this._uuid = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  public get firstname(): string {
    return this._firstname;
  }
  public set firstname(value: string) {
    this._firstname = value;
  }

  public get lastname(): string {
    return this._lastname;
  }
  public set lastname(value: string) {
    this._lastname = value;
  }

  public get gentle(): string {
    return this._gentle;
  }
  public set gentle(value: string) {
    this._gentle = value;
  }

  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }

  public get phone(): string {
    return this._phone;
  }
  public set phone(value: string) {
    this._phone = value;
  }

  public get avatarUri(): string {
    return this._avatarUri;
  }
  public set avatarUri(value: string) {
    this._avatarUri = value;
  }
}