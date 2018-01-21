export class Profiles {
  private _id: number;
  private _profileName: string;
  private _firstName: string;
  private _lastName: string;
  private _dateCreated: Date;
  private _password: string;
  private _Role: string;


  constructor(id: number, profileName: string, firstName: string, lastName: string, dateCreated: Date, password: string, Role: string) {
    this._id = id;
    this._profileName = profileName;
    this._firstName = firstName;
    this._lastName = lastName;
    this._dateCreated = dateCreated;
    this._password = password;
    this._Role = Role;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get profileName(): string {
    return this._profileName;
  }

  set profileName(value: string) {
    this._profileName = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get dateCreated(): Date {
    return this._dateCreated;
  }

  set dateCreated(value: Date) {
    this._dateCreated = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get Role(): string {
    return this._Role;
  }

  set Role(value: string) {
    this._Role = value;
  }

  static fromJson(json: any): Profiles {
    return new Profiles(json.id, json.profileName,
      json.firstName, json.lastName, new Date(json.dateCreated),
      json.password, json.Role);
  }
}
