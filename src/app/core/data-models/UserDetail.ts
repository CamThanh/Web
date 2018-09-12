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
  uuid: string;
  email: string;
  firstname: string;
  lastname: string;
  gentle: string;
  age: number;
  phone: string;
  avatarUri: string;

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
}