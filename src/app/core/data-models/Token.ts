import { IUser, User } from "./User";

export interface IToken {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  user: IUser;
}

export class Token {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  user: User;

  constructor(token?: IToken) {
    if (token) {
      this.access_token = token.access_token;
      this.token_type = token.token_type;
      this.refresh_token = token.refresh_token;
      this.expires_in = token.expires_in;
      this.scope = token.scope;
      this.user = token.user;
    } else {
      this.access_token = "";
      this.token_type = "";
      this.refresh_token = "";
      this.expires_in = 0;
      this.scope = "";
      this.user = new User();
    }
  }
}