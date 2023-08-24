export class User {
  private _firstName: string;
  private _lastName: string;
  private _dateOfBirth: Date;

  constructor(firstName: string, lastName: string, dateOfBirth: Date) {
    this._firstName = firstName.trim();
    this._lastName = lastName.trim();
    this._dateOfBirth = dateOfBirth;
  }

  getFullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  getDateOfBirth(): string {
    return this._dateOfBirth.toISOString()
  }
}