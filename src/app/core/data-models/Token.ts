export interface IToken {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  avatarUri: string;
  email: string;
  username: string;
}

export class Token {
  private _access_token: string;
  private _token_type: string;
  private _refresh_token: string;
  private _expires_in: number;
  private _scope: string;
  private _avatarUri: string;
  private _email: string;
  private _username: string;

  constructor(token?: IToken) {
    if (token) {
      this.access_token = token.access_token;
      this.token_type = token.token_type;
      this.refresh_token = token.refresh_token;
      this.expires_in = token.expires_in;
      this.scope = token.scope;
      this.avatarUri = token.avatarUri;
      this.email = token.email;
      this.username = token.username;
    } else {
      this.access_token = "";
      this.token_type = "";
      this.refresh_token = "";
      this.expires_in = 0;
      this.scope = "";
      this.avatarUri = "";
      this.email = "";
      this.username = "";
    }
  }

  public get access_token(): string {
    return this._access_token;
  }
  public set access_token(value: string) {
    this._access_token = value;
  }

  public get token_type(): string {
    return this._token_type;
  }
  public set token_type(value: string) {
    this._token_type = value;
  }

  public get refresh_token(): string {
    return this._refresh_token;
  }
  public set refresh_token(value: string) {
    this._refresh_token = value;
  }

  public get expires_in(): number {
    return this._expires_in;
  }
  public set expires_in(value: number) {
    this._expires_in = value;
  }

  public get scope(): string {
    return this._scope;
  }
  public set scope(value: string) {
    this._scope = value;
  }

  public get avatarUri(): string {
    return this._avatarUri;
  }
  public set avatarUri(value: string) {
    this._avatarUri = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
}